import { Locale, SnowflakeUtil } from "discord.js"
import { ArgType, IArg, IEvent, INativeFunction, Logger } from "../structures"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { createHash } from "crypto"
import { capitalize } from "lodash"
import { exit, memoryUsage } from "process"
import { TimeParser } from "../constants"
import { generateBar } from "./generateBar"
import { join } from "path"
import { postMessage, spawn, terminate } from "./thread"
import { Worker } from "worker_threads"
import { freemem, totalmem } from "os"

const weirdWords = [
    [ "guild", "server" ],
    [ "role", "role id" ],
    [ "hex", "hexadecimal" ],
    [ "param", "parameter"],
    [ "perm", "permission" ]
] satisfies [string, string][]

export interface IBaseTranslateOptions {
    languages: (Locale | string)[]
    functions: INativeFunction<IArg[]>[]
    events: IEvent<unknown, keyof unknown>[]
}

export interface ITranslateEventOutput {
    description: string
    descriptionHash: string
} 

export interface ITranslateFunctionOutput {
    description: string
    descriptionHash: string

    fields: {
        name: string
        nameHash: string
        
        description: string
        descriptionHash: string
    }[]
}

export interface ITranslateOutput {
    functions: Record<string, ITranslateFunctionOutput>
    events: Record<string, ITranslateEventOutput>
}

function hash(str: string) {
    return createHash("sha256").update(str).digest().toString("hex")
}

async function translateObjectTo(worker: Worker, obj: any, to: Locale | string, existing: any = {}) {
    for (const key of Object.keys(obj)) {
        const value = obj[key]
        if (typeof value === "string") {
            const keyHash = `${key}Hash`
            const oldHash = existing[keyHash]
            const nowHash = hash(value)
            if (oldHash !== nowHash) {
                existing[keyHash] = nowHash
                existing[key] = await translate(worker, value, to)
            }
        } else {
            existing[key] = await translateObjectTo(worker, value, to, existing[key])
        }
    }

    return existing
}

async function translate(worker: Worker, str: string, to: Locale | string) {
    weirdWords.forEach(data => str = str.toLowerCase().includes(data[1]) ? str : str.replaceAll(data[0], data[1]))
    return postMessage<string>(worker, {
        locale: to,
        text: str
    })
}

async function translateEventTo(worker: Worker, event: IEvent<unknown, keyof unknown>, lang: Locale | string, existing: Partial<ITranslateEventOutput> = {}) {
    const newDescriptionHash = hash(event.description)
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash
        existing.description = await translate(worker, event.description, lang)
    }

    return existing as ITranslateEventOutput
}

async function translateFunctionTo(worker: Worker, fn: INativeFunction<IArg[]>, lang: Locale | string, existing: Partial<ITranslateFunctionOutput> = {}) {
    const newDescriptionHash = hash(fn.description)
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash
        existing.description = await translate(worker, fn.description, lang)
    }

    existing.fields ??= []

    for (let i = 0, len = fn.args?.length ?? 0;i < len;i++) {
        const field = fn.args![i]
        const cached = existing.fields[i] ?? {}

        const newNameHash = hash(field.name)
        const newDescriptionHash = hash(field.description)

        if (newNameHash !== cached.nameHash) {
            cached.nameHash = newNameHash
            cached.name = await translate(worker, field.name, lang)
        }

        if (newDescriptionHash !== cached.descriptionHash) {
            cached.descriptionHash = newDescriptionHash
            cached.description = await translate(worker, field.description, lang)
        }

        existing.fields![i] = cached
    }

    if (existing.fields.length === 0)
        delete existing.fields

    return existing as ITranslateFunctionOutput
}

const metaPath = join("metadata", "translations")
const docsPath = join(metaPath, "docs")
const docsEnPath = join(docsPath, "en.json")

const docs: Record<string, unknown> = existsSync(docsEnPath) ? JSON.parse(readFileSync(docsEnPath, "utf-8")) : null

// For every 300mb available, 1 thread.
const threadCount = Math.floor(((totalmem() - freemem()) / (1024 ** 2)) / 300) || 1

export async function translateData(options: IBaseTranslateOptions) {
    const workers = new Array<Worker>()

    Logger.info("Spawning " + threadCount + " threads...")
    for (let i = 0;i < threadCount;i++) {
        workers[i] = await spawn("translationThread")
    }
    Logger.info("Successfully spawned threads.")

    if (!existsSync(metaPath))
        mkdirSync(metaPath)
    
    for (const lang of options.languages) {
        if (docs) {
            const resultPath = join(docsPath, `${lang}.json`)
            const cached: Record<string, unknown> = existsSync(resultPath) ? JSON.parse(readFileSync(resultPath, "utf-8")) : {}
            
            Logger.infoUpdate(`Translating docs to ${lang}...`)
            void await translateObjectTo(workers[0], docs, lang, cached)
            writeFileSync(resultPath, JSON.stringify(cached), "utf-8")
        }

        const resultPath = join(metaPath, `${lang}.json`)
        const cached: Partial<ITranslateOutput> = existsSync(resultPath) ? JSON.parse(readFileSync(resultPath, "utf-8")) : {}
        cached.events ??= {}
        cached.functions ??= {}

        const functionsStartedAt = Date.now()

        for (let x = 0, len = options.functions.length;x < len;x += workers.length) {
            const promises = new Array<Promise<void>>()
            for (let i = x - workers.length;i < x;i++) {
                const worker = workers[i % workers.length]
                const fn = options.functions[i]
                if (!fn)
                    break
                const existing = (cached.functions![fn.name] ?? {}) as Partial<ITranslateFunctionOutput>

                // eslint-disable-next-line no-async-promise-executor
                promises.push(new Promise(async resolve => {
                    cached.functions![fn.name] = await translateFunctionTo(worker, fn, lang, existing)
                    resolve()
                }))
            }

            await Promise.all(promises)
            const elapsed = Date.now() - functionsStartedAt
            const timeLeft = Math.floor((elapsed / x) * (len - x))
            Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/FUNCTIONS] [${generateBar(x, len, 20)} ${(x * 100 / len).toFixed(2)}%] (${TimeParser.parseToString(timeLeft, { limit: 1 })} left)`)
        }

        const eventsStartedAt = Date.now()

        for (let x = 0, len = options.events.length;x < len;x += workers.length) {
            const promises = new Array<Promise<void>>()
            for (let i = x - workers.length;i < x;i++) {
                const worker = workers[i % workers.length]
                const ev = options.events[i]
                if (!ev)
                    break
                const existing = (cached.events![ev.name] ?? {}) as Partial<ITranslateEventOutput>
                // eslint-disable-next-line no-async-promise-executor
                promises.push(new Promise(async resolve => {
                    cached.events![ev.name] = await translateEventTo(worker, ev, lang, existing)
                    resolve()
                }))
            }

            await Promise.all(promises)
            const elapsed = Date.now() - eventsStartedAt
            const timeLeft = Math.floor((elapsed / x) * (len - x))
            Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/EVENTS] [${generateBar(x, len, 20)} ${(x * 100 / len).toFixed(2)}%] (${TimeParser.parseToString(timeLeft, { limit: 1 })} left)`)
        }
        
        writeFileSync(resultPath, JSON.stringify(cached), "utf-8")
        Logger.infoUpdate("Translations saved, now terminating threads...")
        await terminate(...workers)
    }
}