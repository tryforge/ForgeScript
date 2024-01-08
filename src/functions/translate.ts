import { Locale, SnowflakeUtil } from "discord.js"
import { ArgType, IArg, IEvent, INativeFunction, Logger } from "../structures"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { createHash } from "crypto"
import { capitalize } from "lodash"
import { exit } from "process"
import { TimeParser } from "../constants"
import { generateBar } from "./generateBar"
import { join } from "path"

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

async function translate(str: string, to: Locale | string) {
    const raw = await import("@iamtraction/google-translate").then(x => x.default)
    return raw(str, { from: "en", to }).then(x => x.text)
}

async function translateEventTo(event: IEvent<unknown, keyof unknown>, lang: Locale | string, existing: Partial<ITranslateEventOutput> = {}) {
    const newDescriptionHash = hash(event.description)
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash
        existing.description = await translate(event.description, lang)
    }

    return existing as ITranslateEventOutput
}

async function translateFunctionTo(fn: INativeFunction<IArg[]>, lang: Locale | string, existing: Partial<ITranslateFunctionOutput> = {}) {
    const newDescriptionHash = hash(fn.description)
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash
        existing.description = await translate(fn.description, lang)
    }

    existing.fields ??= []

    for (let i = 0, len = fn.args?.length ?? 0;i < len;i++) {
        const field = fn.args![i]
        const cached = existing.fields[i] ?? {}

        const newNameHash = hash(field.name)
        const newDescriptionHash = hash(field.description)

        if (newNameHash !== cached.nameHash) {
            cached.nameHash = newNameHash
            cached.name = await translate(field.name, lang)
        }

        if (newDescriptionHash !== cached.descriptionHash) {
            cached.descriptionHash = newDescriptionHash
            cached.description = await translate(field.description, lang)
        }

        existing.fields![i] = cached
    }

    if (existing.fields.length === 0)
        delete existing.fields

    return existing as ITranslateFunctionOutput
}

const metaPath = "./metadata/translations"

export async function translateData(options: IBaseTranslateOptions) {
    if (!existsSync(metaPath))
        mkdirSync(metaPath)
    
    for (const lang of options.languages) {
        const resultPath = join(metaPath, `${lang}.json`)
        const cached: Partial<ITranslateOutput> = existsSync(resultPath) ? JSON.parse(readFileSync(resultPath, "utf-8")) : {}
        cached.events ??= {}
        cached.functions ??= {}

        const functionsStartedAt = Date.now()

        for (let i = 0, len = options.functions.length;i < len;i++) {
            const fn = options.functions[i]
            const existing = (cached.functions![fn.name] ?? {}) as Partial<ITranslateFunctionOutput>
            cached.functions![fn.name] = await translateFunctionTo(fn, lang, existing)
            const elapsed = Date.now() - functionsStartedAt
            const timeLeft = Math.floor((elapsed / i) * (len - i))
            Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/FUNCTIONS] [${generateBar(i, len, 20)} ${(i * 100 / len).toFixed(2)}%] (${TimeParser.parseToString(timeLeft, { limit: 1 })} left)`)
        }

        const eventsStartedAt = Date.now()

        for (let i = 0, len = options.events.length;i < len;i++) {
            const ev = options.events[i]
            const existing = (cached.events![ev.name] ?? {}) as Partial<ITranslateEventOutput>
            cached.events![ev.name] = await translateEventTo(ev, lang, existing)
            const elapsed = Date.now() - eventsStartedAt
            const timeLeft = Math.floor((elapsed / i) * (len - i))
            Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/EVENTS] [${generateBar(i, len, 20)} ${(i * 100 / len).toFixed(2)}%] (${TimeParser.parseToString(timeLeft, { limit: 1 })} left)`)
        }
        
        writeFileSync(resultPath, JSON.stringify(cached), "utf-8")
    }
}