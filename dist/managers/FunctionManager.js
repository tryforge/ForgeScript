"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionManager = void 0;
const NativeFunction_1 = require("../structures/NativeFunction");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const v8_1 = require("v8");
class FunctionManager {
    static Functions = new Map();
    static loadNative() {
        // eslint-disable-next-line no-undef
        FunctionManager.load(`${__dirname}/../native`);
    }
    static async load(path) {
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js"))) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const req = require(file).default;
            if (this.Functions.has(req.name)) {
                console.log(`Attempted to override already existing function ${req.name}`);
                continue;
            }
            this.Functions.set(req.name, req);
        }
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