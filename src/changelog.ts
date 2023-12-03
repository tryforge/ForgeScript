import { execSync } from "child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { argv } from "process"

const path = "./changelog"
if (!existsSync(path)) mkdirSync(path)

const version = require("../package.json").version

let skip = false

const msg = argv.slice(2).join(" ").replace(
    /(--?(\w+))/gim, (match) => {
        const name = /(\w+)/.exec(match)![1].toLowerCase()
        
        switch (name) {
            case "hide": {
                skip = true
                break
            }

            default: {
                throw new Error(`--${name} is not a valid flag.`)
            }
        }

        return ""
    } 
).trim()

const fileName = `${path}/${version}.json`

if (!skip) {
    const logs = existsSync(fileName) ? JSON.parse(readFileSync(fileName, "utf-8")) : new Array<string>()
    logs.unshift(msg)
    writeFileSync(fileName, JSON.stringify(logs), "utf-8")
}

execSync("git add . && git commit -m \" " + msg + "\" && git push -u origin dev", {
    stdio: "inherit"
})