"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const prompt_1 = __importDefault(require("./functions/prompt"));
const path_1 = require("path");
const path = "./metadata";
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const version = require("../package.json").version;
async function main() {
    let skip = false;
    const msg = (await (0, prompt_1.default)("Please write the commit message: ")).replace(/(--?(\w+))/gim, (match) => {
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
    const fileName = (0, path_1.join)(path, "changelogs.json");
    const json = (0, fs_1.existsSync)(fileName) ? JSON.parse((0, fs_1.readFileSync)(fileName, "utf-8")) : {};
    json[version] ??= [];
    if (!skip) {
        json[version].unshift({
            message: msg,
            timestamp: new Date(),
            author: (0, child_process_1.execSync)("git config user.name").toString().trim()
        });
        (0, fs_1.writeFileSync)(fileName, JSON.stringify(json), "utf-8");
    }
    const branch = await (0, prompt_1.default)("Write the branch name to push to (defaults to dev): ") || "dev";
    const escapedMsg = msg.replace(/\$/g, "\\$");
    (0, child_process_1.execSync)("git branch -M " + branch + " && git add . && git commit -m \"" + escapedMsg + "\" && git push -u origin " + branch, {
        stdio: "inherit"
    });
}
// Nothing
main();
//# sourceMappingURL=commit.js.map