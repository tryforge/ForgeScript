"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeFunctionManager = void 0;
const ForgeFunction_1 = require("../structures/ForgeFunction");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
class ForgeFunctionManager {
    client;
    functions = new Map();
    constructor(client) {
        this.client = client;
    }
    add(options) {
        this.functions.set(options.name, new ForgeFunction_1.ForgeFunction(options));
    }
    get(name) {
        return this.functions.get(name);
    }
    load(path) {
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js"))) {
            const req = require(file).default;
            if (req instanceof ForgeFunction_1.ForgeFunction) {
                this.functions.set(req.data.name, req);
            }
            else
                this.add(...req);
        }
    }
}
exports.ForgeFunctionManager = ForgeFunctionManager;
//# sourceMappingURL=ForgeFunctionManager.js.map