/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { stdin, stdout } from "process"
import { createInterface } from "readline"
import { execFileSync, execSync } from "child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

async function prompt(q: string) {
    const itf = createInterface(stdin, stdout)
    return new Promise<string>(r => {
        itf.question(q, input => {
            itf.close()
            r(input)
        })
    })
}

const path = "./metadata"
if (!existsSync(path)) mkdirSync(path)

const version = require("../../package.json").version

async function main() {
    let skip = false

    const msg = (await prompt("Please write the commit message: ")).replace(
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

    const fileName = join(path, "changelogs.json")
    const json: Record<string, object[]> = existsSync(fileName) ? JSON.parse(readFileSync(fileName, "utf-8")) : {}
    json[version] ??= []
    const author = execSync("git config user.name").toString().trim()
    if (!skip) {
        json[version].unshift({
            message: msg,
            timestamp: new Date(),
            author
        })
        writeFileSync(fileName, JSON.stringify(json), "utf-8")
    }

    const branch = await prompt("Write the branch name to push to (defaults to dev): ") || "dev"

    execFileSync("git", ["branch", "-M", branch], { stdio: "inherit" })
    execFileSync("git", ["add", "."], { stdio: "inherit" })
    execFileSync("git", ["commit", "-m", msg], { stdio: "inherit" })
    execFileSync("git", ["push", "-u", "origin", branch], { stdio: "inherit" })
}

// Nothing
main()