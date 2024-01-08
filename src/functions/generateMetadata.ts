import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs"
import { EventManager, FunctionManager } from "../managers"
import { execSync } from "child_process"
import { argv, cwd, exit } from "process"
import { ArgType, EnumLike, IArg, INativeFunction, Logger } from "../structures"
import { enumToArray } from "./enum"
import { ITraslateFunctionOptions, translateFunctions } from "./translate"
import { capitalize } from "lodash"

const FunctionNameRegex = /(name: "\$?(\w+)"),?/m
const FunctionCategoryRegex = /\r?\n(.*)(category: "\$?(\w+)"),?/m
const ArgEnumRegex = /enum: +(\w+),?/gim
const OutputRegex = /output:(array(<[A-z.]+>)?\((\w+)?\)|(\w+)|ArgType.(\w+)|\[((\w+|ArgType.(\w+)),?)+\]),/im

function getOutputValues(fn: INativeFunction<IArg[]>, txt: string, enums: Record<string, string[]>) {
    const output = OutputRegex.exec(txt.replace(/[^0-9A-z:,.[\]<>()|]/gm, ""))?.[1].replace(/[[\]]/g, "").trim()
    
    if (!output) {
        if (fn.output) {
            Logger.error(`OUTPUT LOOKUP FAILURE: in ${fn.name}, out: ${output}`)
            exit()
        }

        return null
    }

    const arr = new Array<string>()

    let i = 0
    for (const out of output.split(/,/)) {
        const arrMatch = /array(?:<(.*)>)?\((\w+)?\)/gim.exec(out)
        const match = out.match(/\.(\w+)/)?.[1]
        if (!arrMatch && match)
            arr.push(match)
        else {
            if (arrMatch) {
                const [, raw, enumName] = arrMatch
                const types = raw?.replaceAll("ArgType.", "") ?? enumName
                const isMultiple = types.includes("|")
                arr.push(
                    `${isMultiple ? `(${types.trim().split("|").join(" | ")})` : types}[]`
                )

                if (enumName) {
                    const en = Array.isArray(fn.output) ? fn.output[i] as EnumLike : fn.output as EnumLike
                    if (!(enumName in enums))
                        enums[enumName] = enumToArray(en)
                }
            } else {
                arr.push(out)
                const en = Array.isArray(fn.output) ? fn.output[i] as EnumLike : fn.output as EnumLike
                if (!(out in enums))
                    enums[out] = enumToArray(en)
            }
        }

        i++
    }

    return arr
}

export default async function(functionsAbsolutePath: string, mainCategoryName?: string, eventName?: string, warnOnNoOutput = false, expose?: Record<string, EnumLike>, eventsAbsolutePath?: string, translateFuncs?: Omit<ITraslateFunctionOptions, "functions" | "outputFile">) {
    let total = 0
    const enums: Record<string, string[]> = {}

    if (expose?.length)
        Object.entries(expose).forEach(x => enums[x[0]] = enumToArray(x[1]))

    Logger.info(`Loading functions from ${functionsAbsolutePath}`)
    FunctionManager.load("Metadata", functionsAbsolutePath)
    Logger.info(`Loaded ${FunctionManager["Functions"].size} functions`)

    const metaOutPath = "./metadata"

    if (!existsSync(metaOutPath)) mkdirSync(metaOutPath)

    const v = require(cwd() + "/package.json").version

    if (mainCategoryName) {
        for (const [, fn] of FunctionManager["Functions"]) {
            const nativePath = fn.path.replace(".js", ".ts").replace("dist", "src")
            let txt = readFileSync(nativePath, "utf-8")
            const enumNames = Array.from(txt.matchAll(ArgEnumRegex))
            if (enumNames.length) {
                let i = 0
                for (const arg of fn.data.args!) {
                    if (arg.enum) {
                        const name = enumNames[i++][1]
                        Reflect.set(arg, "enumName", name)
                        if (name in enums)
                            continue
                        enums[name] = enumToArray(arg.enum)
                    }
                }
            }

            for (const arg of fn.data.args ?? []) {
                Reflect.set(arg, "type", capitalize(ArgType[arg.type]))
            }
            
            const output = getOutputValues(fn.data, txt, enums)
            if (output?.length)
                Reflect.set(fn.data, "output", output)
            else {
                if (warnOnNoOutput)
                    Logger.warn(`Function ${fn.name} does not return anything!`)
                total++
                Reflect.deleteProperty(fn.data, "output")
            }

            let modified = false
            const pathSplits = fn.path.split(/(?:\\|\/)/gim)
            const category = pathSplits.at(-2) === mainCategoryName ? null : pathSplits.at(-2)!
            if (category)
                Reflect.set(fn.data, "category", category)

            if (txt.includes("category: ")) {
                Logger.warn("Deleting category block from " + fn.name)
                txt = txt.replace(FunctionCategoryRegex, "")
                modified = true
            }
    
            if (!fn.data.version) {
                fn.data.version = v
                txt = txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`)
                modified = true
            }
    
            if (modified)
                writeFileSync(nativePath, txt)
        }
    
        if (warnOnNoOutput)
            Logger.warn(`${total.toLocaleString()} functions are missing output value`)

        writeFileSync(`${metaOutPath}/enums.json`, JSON.stringify(enums), "utf-8")
        writeFileSync(`${metaOutPath}/functions.json`, JSON.stringify(FunctionManager.toJSON()))
    }
    
    if (eventName) {
        if (!eventsAbsolutePath)
            throw new Error("An absolute path to events must be provided")
            
        Logger.info(`Loading events from ${eventsAbsolutePath}`)
        EventManager.load(eventName, eventsAbsolutePath)
        const events = Object.values(EventManager["Loaded"]![eventName]!)
        Logger.info(`Loaded ${events.length} events from ${eventsAbsolutePath}`)

        for (const event of events) {
            const nativePath = `${eventsAbsolutePath.replace("dist", "src")}/${event!.name}.ts`
            const txt = readFileSync(nativePath, "utf-8")

            if (!event!.data.version) {
                event!.data.version = v
                writeFileSync(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`))
            }
        }

        writeFileSync(`${metaOutPath}/events.json`, JSON.stringify(EventManager.toJSON(eventName)))
    }

    if (translateFuncs) {
        Logger.info("Now translating functions, hold tight")
        await translateFunctions({
            ...translateFuncs,
            outputFile: "./metadata/translations.json",
            functions: [...FunctionManager["Functions"].values()].map(x => x.data)
        })
    }
}