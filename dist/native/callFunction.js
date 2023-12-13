"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ForgeError_1 = require("../structures/ForgeError");
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$callFunction",
    version: "1.0.0",
    description: "Calls a forge function made by the user",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The function name",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
        {
            name: "args",
            description: "The args to call this function with",
            rest: true,
            type: NativeFunction_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, args]) {
        const fn = ctx.client.functions.get(name);
        if (!fn)
            return this.err(this.error(ForgeError_1.ErrorType.UnknownXName, "function", name));
        return fn.call(ctx, args);
    },
});
//# sourceMappingURL=callFunction.js.map