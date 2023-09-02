import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs"
import { FunctionManager } from "./managers"
import generateFunctionDoc from "./functions/generateFunctionDoc"

const FunctionNameRegex = /(name: "\$(\w+)"),?/m

const path = "./docs/functions"

if (!existsSync(path)) mkdirSync(path)

const v = require("../package.json").version

for (const [, fn ] of FunctionManager["Functions"]) {
    const nativePath = `./src/native/${fn.name.slice(1)}.ts`
    const txt = readFileSync(nativePath, "utf-8")
    
    if (!fn.data.version) {
        writeFileSync(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`))
    }

    writeFileSync(`${path}/${fn.name.slice(1)}.md`, generateFunctionDoc(fn))
    console.log(`Generated docs for ${fn.name}!`)
}

writeFileSync(`${path}.json`, JSON.stringify(
    FunctionManager.toJSON()
))

writeFileSync("./docs/events.json", JSON.stringify(
    readdirSync("./src/handlers/events").map(x => x.slice(0, -3))
))