"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionManager = void 0;
const NativeFunction_1 = require("../structures/@internal/NativeFunction");
const core_1 = require("../core");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const v8_1 = require("v8");
const Logger_1 = require("../structures/@internal/Logger");
const enum_1 = require("../functions/enum");
const path_1 = require("path");
class FunctionManager {
    static Functions = new Map();
    static loadNative() {
        // eslint-disable-next-line no-undef
        FunctionManager.load("ForgeScript", (0, path_1.join)(__dirname, "..", "native"));
    }
    static load(provider, path) {
        // Backwards compatibility smh
        if (!path)
            return this.load("Unknown", provider);
        const overrideAttempts = new Array();
        const loader = new Array();
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js"))) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const req = require(file).default;
            req.path = file;
            if (this.Functions.has(req.name)) {
                overrideAttempts.push(req.name);
                continue;
            }
            if (!req.data.args?.length)
                req.data.unwrap = false;
            loader.push(req);
        }
        this.addMany(loader);
        if (overrideAttempts.length !== 0)
            Logger_1.Logger.warn(`${provider} | Attempted to override the following ${overrideAttempts.length} functions: ${overrideAttempts.join(", ")}`);
    }
    static addMany(...fns) {
        for (let i = 0, len = fns.length; i < len; i++) {
            const fn = fns[i];
            if (Array.isArray(fn))
                this.addMany(...fn);
            else
                this.Functions.set(fn.name, fn);
        }
        this.reload();
    }
    static add(fn) {
        return this.addMany(fn);
    }
    static reload() {
        core_1.Compiler["setFunctions"](this.raw);
    }
    static get(name) {
        return this.Functions.get(name);
    }
    static toJSON() {
        return Array.from(this.Functions.values()).map((x) => {
            const d = { ...x.data };
            d.args?.forEach((x) => Reflect.deleteProperty(x, "check"));
            Reflect.deleteProperty(d, "execute");
            const data = (0, v8_1.deserialize)((0, v8_1.serialize)(d));
            data.args?.map((x) => {
                x.type = NativeFunction_1.ArgType[x.type];
                if (x.enum)
                    x.enum = (0, enum_1.enumToArray)(x.enum);
            });
            return data;
        });
    }
    static get raw() {
        return Array.from(this.Functions).map((x) => {
            const [name, { data }] = x;
            return {
                aliases: data.aliases ?? null,
                name,
                args: data.brackets === undefined
                    ? null
                    : {
                        required: data.brackets,
                        fields: data.args.map((x) => ({
                            condition: x.condition,
                            rest: x.rest,
                        })),
                    },
            };
        });
    }
}
exports.FunctionManager = FunctionManager;
//# sourceMappingURL=FunctionManager.js.map