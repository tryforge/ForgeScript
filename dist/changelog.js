"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const process_1 = require("process");
const path = "./changelog";
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const version = require("../package.json").version;
const msg = process_1.argv.slice(2).join(" ");
const fileName = `${path}-${version}.txt`;
const logs = (0, fs_1.existsSync)(fileName) ? (0, fs_1.readFileSync)(path, "utf-8").split("\n") : new Array();
logs.unshift(msg);
(0, fs_1.writeFileSync)(fileName, logs.join("\n"));
(0, child_process_1.execSync)("git add . && git commit -m \" " + msg + "\" && git push -u origin dev");
//# sourceMappingURL=changelog.js.map