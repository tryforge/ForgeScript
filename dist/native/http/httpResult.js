"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpResult",
    version: "1.2.0",
    description: "Retrieve an http result value",
    output: (0, array_1.default)(),
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: true
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [args]) {
        if (!this.hasFields)
            return this.successJSON(ctx.getEnvironmentKey("result"));
        const env = ctx.getEnvironmentKey("result", ...args);
        return this.successJSON(env);
    },
});
//# sourceMappingURL=httpResult.js.map