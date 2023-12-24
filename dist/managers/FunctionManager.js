"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionManager = void 0;
const NativeFunction_1 = require("../structures/@internal/NativeFunction");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const v8_1 = require("v8");
const Logger_1 = require("../structures/@internal/Logger");
class FunctionManager {
    static Functions = new Map();
    static loadNative() {
        // eslint-disable-next-line no-undef
        FunctionManager.load("ForgeScript", `${__dirname}/../native`);
    }
    static load(provider, path) {
        const overrideAttempts = new Array();
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
            this.Functions.set(req.name, req);
        }
        if (overrideAttempts.length !== 0)
            Logger_1.Logger.warn(`${provider} | Attempted to override the following ${overrideAttempts.length} functions: ${overrideAttempts.join(", ")}`);
    }
    static disable(fns) {
        for (let i = 0, len = fns.length; i < len; i++) {
            const fn = fns[i];
            if (!this.Functions.delete(fn))
                Logger_1.Logger.warn(`Attempted to disable non existing function: ${fn}`);
        }
        Logger_1.Logger.info(`The following ${fns.length} functions were disabled: ${fns.join(", ")}`);
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
                    x.enum = Object.keys(x.enum).filter((x) => isNaN(Number(x)));
            });
            return data;
        });
    }
    static get raw() {
        return Array.from(this.Functions).map((x) => {
            const [name, { data }] = x;
            return {
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