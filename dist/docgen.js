"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const managers_1 = require("./managers");
managers_1.FunctionManager.loadNative();
const mainPathName = "native";
const FunctionNameRegex = /(name: "\$?(\w+)"),?/m;
const FunctionCategoryRegex = /(category: "\$?(\w+)"),?/m;
const path = "./docs/functions";
const metaOutPath = "./metadata";
if (!(0, fs_1.existsSync)(metaOutPath))
    (0, fs_1.mkdirSync)(metaOutPath);
if (!(0, fs_1.existsSync)(path))
    (0, fs_1.mkdirSync)(path);
const v = require("../package.json").version;
for (const [, fn] of managers_1.FunctionManager["Functions"]) {
    const nativePath = fn.path.replace(".js", ".ts").replace("dist", "src");
    let txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
    let modified = false;
    const pathSplits = fn.path.split(/(?:\\|\/)/gim);
    const category = pathSplits.at(-2) === mainPathName ? "unknown" : pathSplits.at(-2);
    if (fn.data.category !== category) {
        const existed = !!fn.data.category;
        fn.data.category = category;
        if (!existed) {
            txt = txt.replace(FunctionNameRegex, `$1,\n    category: "${category}",`);
        }
        else {
            txt = txt.replace(FunctionCategoryRegex, `category: "${category}",`);
        }
        modified = true;
    }
    if (!fn.data.version) {
        fn.data.version = v;
        txt = txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`);
        modified = true;
    }
    if (modified)
        (0, fs_1.writeFileSync)(nativePath, txt);
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