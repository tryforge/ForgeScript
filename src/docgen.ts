import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs"
import { EventManager, FunctionManager, NativeEventName } from "./managers"
import generateFunctionDoc from "./functions/generateFunctionDoc"
import { execSync } from "child_process"
import { argv } from "process"

const FunctionNameRegex = /(name: "\$?(\w+)"),?/m

const path = "./docs/functions"

if (!existsSync(path)) mkdirSync(path)

const v = require("../package.json").version

for (const [, fn ] of FunctionManager["Functions"]) {
    const nativePath = `./src/native/${fn.name.slice(1)}.ts`
    const txt = readFileSync(nativePath, "utf-8")
    
    if (!fn.data.version) {
        fn.data.version = v
        writeFileSync(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`))
    }

    writeFileSync(`${path}/${fn.name.slice(1)}.md`, generateFunctionDoc(fn))
    console.log(`Generated docs for ${fn.name}!`)
}

writeFileSync(`${path}.json`, JSON.stringify(
    FunctionManager.toJSON()
))

for (const event of Object.values(EventManager["Loaded"]![NativeEventName]!)) {
    const nativePath = `./src/handlers/events/${event!.name}.ts`
    const txt = readFileSync(nativePath, "utf-8")
    
    if (!event!.data.version) {
        event!.data.version = v
        writeFileSync(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`))
    }
}

writeFileSync("./docs/events.json", JSON.stringify(
    EventManager.toJSON(NativeEventName)
))