"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const managers_1 = require("../managers");
const process_1 = require("process");
const structures_1 = require("../structures");
const enum_1 = require("./enum");
const translate_1 = require("./translate");
const path_1 = require("path");
const FunctionNameRegex = /(name: "\$?(\w+)"),?/m;
const FunctionCategoryRegex = /\r?\n(.*)(category: "\$?(\w+)"),?/m;
const ArgEnumRegex = /(?:enum: +(\w+),?|Arg\.(?:\w+)Enum\([\r\n\t ]?(\w+))/gim;
const OutputRegex = /output:(array(<[A-z.]+>)?\((\w+)?\)|(\w+)|ArgType.(\w+)|\[((\w+|ArgType.(\w+)),?)+\]),/im;
function getOutputValues(fn, txt, enums) {
    const output = OutputRegex.exec(txt.replace(/[^0-9A-z:,.[\]<>()|]/gm, ""))?.[1].replace(/[[\]]/g, "").trim();
    if (!output) {
        if (fn.output) {
            structures_1.Logger.error(`OUTPUT LOOKUP FAILURE: in ${fn.name}, out: ${output}`);
            (0, process_1.exit)();
        }
        return null;
    }
    const arr = new Array();
    let i = 0;
    for (const out of output.split(/,/)) {
        const arrMatch = /array(?:<(.*)>)?\((\w+)?\)/gim.exec(out);
        const match = out.match(/\.(\w+)/)?.[1];
        if (!arrMatch && match)
            arr.push(match);
        else {
            if (arrMatch) {
                const [, raw, enumName] = arrMatch;
                const types = raw?.replaceAll("ArgType.", "") ?? enumName;
                const isMultiple = types.includes("|");
                arr.push(`${isMultiple ? `(${types.trim().split("|").join(" | ")})` : types}[]`);
                if (enumName) {
                    const en = Array.isArray(fn.output) ? fn.output[i] : fn.output;
                    if (!(enumName in enums))
                        enums[enumName] = (0, enum_1.enumToArray)(en);
                }
            }
            else {
                arr.push(out);
                const en = Array.isArray(fn.output) ? fn.output[i] : fn.output;
                if (!(out in enums))
                    enums[out] = (0, enum_1.enumToArray)(en);
            }
        }
        i++;
    }
    return arr;
}
async function default_1(functionsAbsolutePath, mainCategoryName, eventName, warnOnNoOutput = false, expose, eventsAbsolutePath, translate = []) {
    let total = 0;
    const enums = {};
    if (expose?.length)
        Object.entries(expose).forEach(x => enums[x[0]] = (0, enum_1.enumToArray)(x[1]));
    structures_1.Logger.info(`Loading functions from ${functionsAbsolutePath}`);
    managers_1.FunctionManager.load("Metadata", functionsAbsolutePath);
    structures_1.Logger.info(`Loaded ${managers_1.FunctionManager["Functions"].size} functions`);
    const metaOutPath = "./metadata";
    if (!(0, fs_1.existsSync)(metaOutPath))
        (0, fs_1.mkdirSync)(metaOutPath);
    const v = require((0, process_1.cwd)() + "/package.json").version;
    if (mainCategoryName) {
        for (const [, fn] of managers_1.FunctionManager["Functions"]) {
            const nativePath = fn.path.replace(".js", ".ts").replace("dist", "src");
            let txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
            const enumNames = Array.from(txt.matchAll(ArgEnumRegex));
            if (enumNames.length) {
                let i = 0;
                for (const arg of fn.data.args) {
                    if (arg.enum) {
                        const data = enumNames[i++];
                        const name = data[1] ?? data[2];
                        Reflect.set(arg, "enumName", name);
                        if (name in enums)
                            continue;
                        enums[name] = (0, enum_1.enumToArray)(arg.enum);
                    }
                }
            }
            const output = getOutputValues(fn.data, txt, enums);
            if (output?.length)
                Reflect.set(fn.data, "output", output);
            else {
                if (warnOnNoOutput)
                    structures_1.Logger.warn(`Function ${fn.name} does not return anything!`);
                total++;
                Reflect.deleteProperty(fn.data, "output");
            }
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
        if (warnOnNoOutput)
            structures_1.Logger.warn(`${total.toLocaleString()} functions are missing output value`);
        (0, fs_1.writeFileSync)((0, path_1.join)(metaOutPath, "enums.json"), JSON.stringify(enums), "utf-8");
        (0, fs_1.writeFileSync)((0, path_1.join)(metaOutPath, "functions.json"), JSON.stringify(managers_1.FunctionManager.toJSON()));
    }
    if (eventName) {
        if (!eventsAbsolutePath)
            throw new Error("An absolute path to events must be provided");
        structures_1.Logger.info(`Loading events from ${eventsAbsolutePath}`);
        managers_1.EventManager.load(eventName, eventsAbsolutePath);
        const events = Object.values(managers_1.EventManager["Loaded"][eventName]);
        structures_1.Logger.info(`Loaded ${events.length} events from ${eventsAbsolutePath}`);
        for (const event of events) {
            const nativePath = `${eventsAbsolutePath.replace("dist", "src")}/${event.name}.ts`;
            const txt = (0, fs_1.readFileSync)(nativePath, "utf-8");
            if (!event.data.version) {
                event.data.version = v;
                (0, fs_1.writeFileSync)(nativePath, txt.replace(FunctionNameRegex, `$1,\n    version: "${v}",`));
            }
        }
        (0, fs_1.writeFileSync)((0, path_1.join)(metaOutPath, "events.json"), JSON.stringify(managers_1.EventManager.toJSON(eventName)));
    }
    if (translate.length) {
        structures_1.Logger.info("Now translating data, hold tight...");
        await (0, translate_1.translateData)({
            languages: translate,
            events: eventName ? Object.values(managers_1.EventManager["Loaded"][eventName]).map(x => x.data) : [],
            functions: [...managers_1.FunctionManager["Functions"].values()].map(x => x.data)
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=generateMetadata.js.map