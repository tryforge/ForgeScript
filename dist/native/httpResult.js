"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$httpResult",
    version: "1.2.0",
    description: "Retrieve an http result value",
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
        const env = ctx.getEnvironmentKey("result", ...args);
        return this.successJSON(env);
    },
});
//# sourceMappingURL=httpResult.js.map