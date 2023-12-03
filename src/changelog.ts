import { execSync } from "child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { argv } from "process"

const path = "./changelog"
if (!existsSync(path)) mkdirSync(path)

const version = require("../package.json").version
const msg = argv.slice(2).join(" ")

const fileName = `${path}/${version}.txt`
const logs = existsSync(fileName) ? readFileSync(path, "utf-8").split("\n") : new Array<string>()
logs.unshift(msg)
writeFileSync(fileName, logs.join("\n"))
execSync("git add . && git commit -m \" " + msg + "\" && git push -u origin dev")