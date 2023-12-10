"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const process_1 = require("process");
const path = "./metadata";
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const version = require("../package.json").version;
let skip = false;
const msg = process_1.argv.slice(2).join(" ").replace(/(--?(\w+))/gim, (match) => {
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
(0, child_process_1.execSync)("git add . && git commit -m \" " + msg + "\" && git push -u origin dev", {
    stdio: "inherit"
});
//# sourceMappingURL=changelog.js.map