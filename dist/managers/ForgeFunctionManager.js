"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFunctionManager = void 0;
const ForgeFunction_1 = require("../structures/forge/ForgeFunction");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const FunctionManager_1 = require("./FunctionManager");
const path_1 = require("path");
const process_1 = require("process");
class ForgeFunctionManager {
    client;
    functions = new Map();
    constructor(client) {
        this.client = client;
    }
    add(...options) {
        for (let i = 0, len = options.length; i < len; i++) {
            const option = options[i];
            if (Array.isArray(option))
                this.add(...option);
            else {
                const opt = this.resolve(option);
                this.functions.set(opt.data.name, opt);
            }
        }
        this.populate();
    }
    resolve(s) {
        return s instanceof ForgeFunction_1.ForgeFunction ? s : new ForgeFunction_1.ForgeFunction(s);
    }
    populate() {
        FunctionManager_1.FunctionManager.addMany(Array.from(this.functions.values()).map(x => x.asNative()));
    }
    get(name) {
        return this.functions.get(name);
    }
    load(path) {
        const loader = new Array();
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js"))) {
            const path = (0, path_1.join)((0, process_1.cwd)(), file);
            const data = require(path);
            if (Object.keys(data).length === 0)
                continue;
            const req = (data.default ?? data);
            loader.push(req);
        }
        this.add(loader);
    }
}
exports.ForgeFunctionManager = ForgeFunctionManager;
//# sourceMappingURL=ForgeFunctionManager.js.map