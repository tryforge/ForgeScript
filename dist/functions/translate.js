"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateData = void 0;
const structures_1 = require("../structures");
const fs_1 = require("fs");
const crypto_1 = require("crypto");
const constants_1 = require("../constants");
const generateBar_1 = require("./generateBar");
const path_1 = require("path");
const thread_1 = require("./thread");
const os_1 = require("os");
const weirdWords = [
    ["guild", "server"],
    ["role", "role id"],
    ["hex", "hexadecimal"],
    ["param", "parameter"],
    ["perm", "permission"]
];
function hash(str) {
    return (0, crypto_1.createHash)("sha256").update(str).digest().toString("hex");
}
async function translateObjectTo(worker, obj, to, existing = {}) {
    for (const key of Object.keys(obj)) {
        const value = obj[key];
        if (typeof value === "string") {
            const keyHash = `${key}Hash`;
            const oldHash = existing[keyHash];
            const nowHash = hash(value);
            if (oldHash !== nowHash) {
                existing[keyHash] = nowHash;
                existing[key] = await translate(worker, value, to);
            }
        }
        else {
            existing[key] = await translateObjectTo(worker, value, to, existing[key]);
        }
    }
    return existing;
}
async function translate(worker, str, to) {
    weirdWords.forEach(data => str = str.toLowerCase().includes(data[1]) ? str : str.replaceAll(data[0], data[1]));
    return (0, thread_1.postMessage)(worker, {
        locale: to,
        text: str
    });
}
async function translateEventTo(worker, event, lang, existing = {}) {
    const newDescriptionHash = hash(event.description);
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash;
        existing.description = await translate(worker, event.description, lang);
    }
    return existing;
}
async function translateFunctionTo(worker, fn, lang, existing = {}) {
    const newDescriptionHash = hash(fn.description);
    if (newDescriptionHash !== existing.descriptionHash) {
        existing.descriptionHash = newDescriptionHash;
        existing.description = await translate(worker, fn.description, lang);
    }
    existing.fields ??= [];
    for (let i = 0, len = fn.args?.length ?? 0; i < len; i++) {
        const field = fn.args[i];
        const cached = existing.fields[i] ?? {};
        const newNameHash = hash(field.name);
        const newDescriptionHash = hash(field.description);
        if (newNameHash !== cached.nameHash) {
            cached.nameHash = newNameHash;
            cached.name = await translate(worker, field.name, lang);
        }
        if (newDescriptionHash !== cached.descriptionHash) {
            cached.descriptionHash = newDescriptionHash;
            cached.description = await translate(worker, field.description, lang);
        }
        existing.fields[i] = cached;
    }
    if (existing.fields.length === 0)
        delete existing.fields;
    return existing;
}
const metaPath = (0, path_1.join)("metadata", "translations");
const docsPath = (0, path_1.join)(metaPath, "docs");
const docsEnPath = (0, path_1.join)(docsPath, "en.json");
const docs = (0, fs_1.existsSync)(docsEnPath) ? JSON.parse((0, fs_1.readFileSync)(docsEnPath, "utf-8")) : null;
// For every 300mb available, 1 thread.
const threadCount = Math.floor((((0, os_1.totalmem)() - (0, os_1.freemem)()) / (1024 ** 2)) / 300) || 1;
async function translateData(options) {
    const workers = new Array();
    structures_1.Logger.info("Spawning " + threadCount + " threads...");
    for (let i = 0; i < threadCount; i++) {
        workers[i] = await (0, thread_1.spawn)("translationThread");
    }
    structures_1.Logger.info("Successfully spawned threads.");
    if (!(0, fs_1.existsSync)(metaPath))
        (0, fs_1.mkdirSync)(metaPath);
    for (const lang of options.languages) {
        if (docs) {
            const resultPath = (0, path_1.join)(docsPath, `${lang}.json`);
            const cached = (0, fs_1.existsSync)(resultPath) ? JSON.parse((0, fs_1.readFileSync)(resultPath, "utf-8")) : {};
            structures_1.Logger.infoUpdate(`Translating docs to ${lang}...`);
            void await translateObjectTo(workers[0], docs, lang, cached);
            (0, fs_1.writeFileSync)(resultPath, JSON.stringify(cached), "utf-8");
        }
        const resultPath = (0, path_1.join)(metaPath, `${lang}.json`);
        const cached = (0, fs_1.existsSync)(resultPath) ? JSON.parse((0, fs_1.readFileSync)(resultPath, "utf-8")) : {};
        cached.events ??= {};
        cached.functions ??= {};
        const functionsStartedAt = Date.now();
        for (let x = 0, len = options.functions.length; x < len; x += workers.length) {
            const promises = new Array();
            for (let i = x - workers.length; i < x; i++) {
                const worker = workers[i % workers.length];
                const fn = options.functions[i];
                if (!fn)
                    break;
                const existing = (cached.functions[fn.name] ?? {});
                // eslint-disable-next-line no-async-promise-executor
                promises.push(new Promise(async (resolve) => {
                    cached.functions[fn.name] = await translateFunctionTo(worker, fn, lang, existing);
                    resolve();
                }));
            }
            await Promise.all(promises);
            const elapsed = Date.now() - functionsStartedAt;
            const timeLeft = Math.floor((elapsed / x) * (len - x));
            structures_1.Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/FUNCTIONS] [${(0, generateBar_1.generateBar)(x, len, 20)} ${(x * 100 / len).toFixed(2)}%] (${constants_1.TimeParser.parseToString(timeLeft, { limit: 1 })} left)`);
        }
        const eventsStartedAt = Date.now();
        for (let x = 0, len = options.events.length; x < len; x += workers.length) {
            const promises = new Array();
            for (let i = x - workers.length; i < x; i++) {
                const worker = workers[i % workers.length];
                const ev = options.events[i];
                if (!ev)
                    break;
                const existing = (cached.events[ev.name] ?? {});
                // eslint-disable-next-line no-async-promise-executor
                promises.push(new Promise(async (resolve) => {
                    cached.events[ev.name] = await translateEventTo(worker, ev, lang, existing);
                    resolve();
                }));
            }
            await Promise.all(promises);
            const elapsed = Date.now() - eventsStartedAt;
            const timeLeft = Math.floor((elapsed / x) * (len - x));
            structures_1.Logger.infoUpdate(`[${lang.toUpperCase()} TRANSLATION/EVENTS] [${(0, generateBar_1.generateBar)(x, len, 20)} ${(x * 100 / len).toFixed(2)}%] (${constants_1.TimeParser.parseToString(timeLeft, { limit: 1 })} left)`);
        }
        (0, fs_1.writeFileSync)(resultPath, JSON.stringify(cached), "utf-8");
        structures_1.Logger.infoUpdate("Translations saved, now terminating threads...");
        await (0, thread_1.terminate)(...workers);
    }
}
exports.translateData = translateData;
//# sourceMappingURL=translate.js.map