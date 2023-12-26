"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const managers_1 = require("../managers");
const process_1 = require("process");
const structures_1 = require("../structures");
const FunctionNameRegex = /(name: "\$?(\w+)"),?/m;
const FunctionCategoryRegex = /\r?\n(.*)(category: "\$?(\w+)"),?/m;
function default_1(functionsAbsolutePath, mainCategoryName, eventName) {
    managers_1.FunctionManager.load("Metadata", functionsAbsolutePath);
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
            const category = pathSplits.at(-2) === mainCategoryName ? null : pathSplits.at(-2);
            if (category)
                Reflect.set(fn.data, "category", category);
            if (txt.includes("category: ")) {
                structures_1.Logger.warn("Deleting category block from " + fn.name);
                txt = txt.replace(FunctionCategoryRegex, "");
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