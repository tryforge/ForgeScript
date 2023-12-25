"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const managers_1 = require("../managers");
const process_1 = require("process");
function default_1(functionsAbsolutePath, mainCategoryName, eventName) {
    managers_1.FunctionManager.load("Metadata", functionsAbsolutePath);
    const FunctionNameRegex = /(name: "\$?(\w+)"),?/m;
    const FunctionCategoryRegex = /(category: "\$?(\w+)"),?/m;
    const metaOutPath = "./metadata";
    if (!(0, fs_1.existsSync)(metaOutPath))
        (0, fs_1.mkdirSync)(metaOutPath);
    const v = require((0, process_1.cwd)() + "/package.json").version;
    if (mainCategoryName) {
        for (const [, fn] of managers_1.FunctionManager["Functions"]) {
            const nativePath = fn.path.replace(".js", ".ts").replace("dist", "src");
            let txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
            let modified = false;
            const pathSplits = fn.path.split(/(?:\\|\/)/gim);
            const category = pathSplits.at(-2) === mainCategoryName ? "unknown" : pathSplits.at(-2);
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
    }
    if (eventName) {
        for (const event of Object.values(managers_1.EventManager["Loaded"][eventName])) {
            const nativePath = `./src/handlers/events/${event.name}.ts`;
            const txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
            if (!event.data.version) {
                event.data.version = v;
                (0, fs_1.writeFileSync)(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`));
            }
        }
        (0, fs_1.writeFileSync)(`${metaOutPath}/events.json`, JSON.stringify(managers_1.EventManager.toJSON(eventName)));
    }
}
exports.default = default_1;
//# sourceMappingURL=generateMetadata.js.map