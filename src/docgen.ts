import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs"
import { EventManager, FunctionManager, NativeEventName } from "./managers"
import { execSync } from "child_process"
import { argv } from "process"
import { Logger } from "./structures"

FunctionManager.loadNative()

const mainPathName = "native"
const FunctionNameRegex = /(name: "\$?(\w+)"),?/m
const FunctionCategoryRegex = /(category: "\$?(\w+)"),?/m

const path = "./docs/functions"
const metaOutPath = "./metadata"

if (!existsSync(metaOutPath)) mkdirSync(metaOutPath)
if (!existsSync(path)) mkdirSync(path)

const v = require("../package.json").version

for (const [, fn] of FunctionManager["Functions"]) {
    const nativePath = fn.path.replace(".js", ".ts").replace("dist", "src")
    let txt = readFileSync(nativePath, "utf-8")
    let modified = false
    const pathSplits = fn.path.split(/(?:\\|\/)/gim)
    const category = pathSplits.at(-2) === mainPathName ? "unknown" : pathSplits.at(-2)!

    if (fn.data.category !== category) {
        const existed = !!fn.data.category
        fn.data.category = category
        if (!existed) {
            txt = txt.replace(FunctionNameRegex, `$1,\n    category: "${category}",`)
        } else {
            txt = txt.replace(FunctionCategoryRegex, `category: "${category}",`)
        }
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

writeFileSync(`${metaOutPath}/functions.json`, JSON.stringify(FunctionManager.toJSON()))

for (const event of Object.values(EventManager["Loaded"]![NativeEventName]!)) {
    const nativePath = `./src/handlers/events/${event!.name}.ts`
    const txt = readFileSync(nativePath, "utf-8")

    if (!event!.data.version) {
        event!.data.version = v
        writeFileSync(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`))
    }
}

writeFileSync(`${metaOutPath}/events.json`, JSON.stringify(EventManager.toJSON(NativeEventName)))
