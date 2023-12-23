"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const process_1 = require("process");
const readline_1 = require("readline");
async function prompt(q) {
    const itf = (0, readline_1.createInterface)(process_1.stdin, process_1.stdout);
    return new Promise(r => {
        itf.question(q, input => {
            itf.close();
            r(input);
        });
    });
}
const path = "./metadata";
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const version = require("../package.json").version;
async function main() {
    let skip = false;
    const msg = (await prompt("Please write the commit message: ")).replace(/(--?(\w+))/gim, (match) => {
        const name = /(\w+)/.exec(match)[1].toLowerCase();
        switch (name) {
            case "hide": {
                skip = true;
                break;
            }
            default: {
                throw new Error(`--${name} is not a valid flag.`);
            }
        }
        return "";
    }).trim();
    const fileName = `${path}/changelogs.json`;
    const json = (0, fs_1.existsSync)(fileName) ? JSON.parse((0, fs_1.readFileSync)(fileName, "utf-8")) : {};
    json[version] ??= [];
    if (!skip) {
        json[version].unshift(msg);
        (0, fs_1.writeFileSync)(fileName, JSON.stringify(json), "utf-8");
    }
    const branch = await prompt("Write the branch name to push to (defaults to dev): ") || "dev";
    (0, child_process_1.execSync)("git branch -M " + branch + " && git add . && git commit -m \"" + msg + "\" && git push -u origin " + branch, {
        stdio: "inherit"
    });
}
main();
//# sourceMappingURL=commit.js.map