"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const managers_1 = require("./managers");
const generateFunctionDoc_1 = __importDefault(require("./functions/generateFunctionDoc"));
managers_1.FunctionManager.loadNative();
const FunctionNameRegex = /(name: "\$?(\w+)"),?/m;
const path = "./docs/functions";
const metaOutPath = "./metadata";
if (!(0, fs_1.existsSync)(metaOutPath))
    (0, fs_1.mkdirSync)(metaOutPath);
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const v = require("../package.json").version;
for (const [, fn] of managers_1.FunctionManager["Functions"]) {
    const nativePath = `./src/native/${fn.name.slice(1)}.ts`;
    const txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
    if (!fn.data.version) {
        fn.data.version = v;
        (0, fs_1.writeFileSync)(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`));
    }
    (0, fs_1.writeFileSync)(`${path}/${fn.name.slice(1)}.md`, (0, generateFunctionDoc_1.default)(fn));
    console.log(`Generated docs for ${fn.name}!`);
}
(0, fs_1.writeFileSync)(`${metaOutPath}/functions.json`, JSON.stringify(managers_1.FunctionManager.toJSON()));
for (const event of Object.values(managers_1.EventManager["Loaded"][managers_1.NativeEventName])) {
    const nativePath = `./src/handlers/events/${event.name}.ts`;
    const txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
    if (!event.data.version) {
        event.data.version = v;
        (0, fs_1.writeFileSync)(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`));
    }
}
(0, fs_1.writeFileSync)(`${metaOutPath}/events.json`, JSON.stringify(managers_1.EventManager.toJSON(managers_1.NativeEventName)));
//# sourceMappingURL=docgen.js.map