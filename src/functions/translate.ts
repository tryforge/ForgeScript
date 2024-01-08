import { Locale, SnowflakeUtil } from "discord.js"
import { ArgType, IArg, INativeFunction, Logger } from "../structures"
import { existsSync, readFileSync, writeFileSync } from "fs"
import { createHash } from "crypto"
import { capitalize } from "lodash"
import { exit } from "process"
import { TimeParser } from "../constants"
import { generateBar } from "./generateBar"

export interface IBaseTranslateOptions {
    languages: (Locale | string)[]
    outputFile: string
}

export interface ITraslateFunctionOptions extends IBaseTranslateOptions {
    functions: INativeFunction<IArg[]>[]
}

export type ITranslateFunctionOutput = Record<Locale | string, {
    description: string
    descriptionHash: string

    fields: {
        name: string
        nameHash: string
        
        description: string
        descriptionHash: string
    }[]
}>

function hash(str: string) {
    return createHash("sha256").update(str).digest().toString("hex")
}

async function translate(str: string, to: Locale | string) {
    const raw = await import("@iamtraction/google-translate").then(x => x.default)
    return raw(str, { from: "en", to }).then(x => x.text)
}

async function translateFunctionTo(fn: INativeFunction<IArg[]>, lang: Locale | string, existing: Partial<ITranslateFunctionOutput[Locale]> = {}) {
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

    return existing as ITranslateFunctionOutput[Locale]
}

export async function translateFunctions(options: ITraslateFunctionOptions) {
    const json: Record<string, ITranslateFunctionOutput> = existsSync(options.outputFile) ? JSON.parse(readFileSync(options.outputFile, "utf-8")) : {}
    const startedAt = Date.now()
    for (let i = 0, len = options.functions.length;i < len;i++) {
        const fn = options.functions[i]
        const existing = (json[fn.name] ?? {}) as Partial<ITranslateFunctionOutput>
        for (const lang of options.languages)
            existing[lang] = await translateFunctionTo(fn, lang, existing[lang])
        json[fn.name] = existing as ITranslateFunctionOutput
        const elapsed = Date.now() - startedAt
        const timeLeft = Math.floor((elapsed / i) * (len - i))
        Logger.infoUpdate(`[${generateBar(i, len, 20)} ${(i * 100 / len).toFixed(2)}%] (${TimeParser.parseToString(timeLeft, { limit: 1 })} left)`)
    }

    writeFileSync(options.outputFile, JSON.stringify(json), "utf-8")
}