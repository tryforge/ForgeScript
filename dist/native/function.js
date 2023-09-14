"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$function",
    version: "1.0.0",
    description: "Runs a function",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "code",
            description: "Code to execute",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: true
        }
    ],
    brackets: true,
    execute: async function (ctx) {
        const rt = await this["resolveArgs"](ctx);
        if (rt.return)
            return Return_1.Return.success(rt.value);
        else if (rt.success)
            return Return_1.Return.success();
        return rt;
    }
});
//# sourceMappingURL=function.js.map