import { existsSync, mkdirSync, readdirSync, writeFileSync } from "fs"
import { FunctionManager } from "./managers"
import generateFunctionDoc from "./functions/generateFunctionDoc"

const path = "./docs/functions"

if (!existsSync(path)) mkdirSync(path)

for (const [, fn ] of FunctionManager["Functions"]) {
    writeFileSync(`${path}/${fn.name.slice(1)}.md`, generateFunctionDoc(fn))
    console.log(`Generated docs for ${fn.name}!`)
}

writeFileSync(`${path}.json`, JSON.stringify(
    FunctionManager.toJSON()
))

writeFileSync("./docs/events.json", JSON.stringify(
    readdirSync("./src/handlers/events").map(x => x.slice(0, -3))
))