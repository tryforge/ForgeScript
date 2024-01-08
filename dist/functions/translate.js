"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateFunctions = void 0;
const structures_1 = require("../structures");
const fs_1 = require("fs");
const crypto_1 = require("crypto");
const constants_1 = require("../constants");
const generateBar_1 = require("./generateBar");
function hash(str) {
    return (0, crypto_1.createHash)("sha256").update(str).digest().toString("hex");
}
async function translate(str, to) {
    const raw = await Promise.resolve().then(() => __importStar(require("@iamtraction/google-translate"))).then(x => x.default);
    return raw(str, { from: "en", to }).then(x => x.text);
}
async function translateFunctionTo(fn, lang, existing = {}) {
    const newDescriptionHash = hash(fn.description);
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash;
        existing.description = await translate(fn.description, lang);
    }
    existing.fields ??= [];
    for (let i = 0, len = fn.args?.length ?? 0; i < len; i++) {
        const field = fn.args[i];
        const cached = existing.fields[i] ?? {};
        const newNameHash = hash(field.name);
        const newDescriptionHash = hash(field.description);
        if (newNameHash !== cached.nameHash) {
            cached.nameHash = newNameHash;
            cached.name = await translate(field.name, lang);
        }
        if (newDescriptionHash !== cached.descriptionHash) {
            cached.descriptionHash = newDescriptionHash;
            cached.description = await translate(field.description, lang);
        }
        existing.fields[i] = cached;
    }
    if (existing.fields.length === 0)
        delete existing.fields;
    return existing;
}
async function translateFunctions(options) {
    const json = (0, fs_1.existsSync)(options.outputFile) ? JSON.parse((0, fs_1.readFileSync)(options.outputFile, "utf-8")) : {};
    const startedAt = Date.now();
    for (let i = 0, len = options.functions.length; i < len; i++) {
        const fn = options.functions[i];
        const existing = (json[fn.name] ?? {});
        for (const lang of options.languages)
            existing[lang] = await translateFunctionTo(fn, lang, existing[lang]);
        json[fn.name] = existing;
        const elapsed = Date.now() - startedAt;
        const timeLeft = Math.floor((elapsed / i) * (len - i));
        structures_1.Logger.infoUpdate(`[${(0, generateBar_1.generateBar)(i, len, 20)} ${(i * 100 / len).toFixed(2)}%] (${constants_1.TimeParser.parseToString(timeLeft, { limit: 1 })} left)`);
    }
    (0, fs_1.writeFileSync)(options.outputFile, JSON.stringify(json), "utf-8");
}
exports.translateFunctions = translateFunctions;
//# sourceMappingURL=translate.js.map