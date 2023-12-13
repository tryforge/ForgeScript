"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$env",
    version: "1.0.0",
    description: "Retrieves an environment value",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: true,
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [args]) {
        const env = ctx.getEnvironmentKey(...args);
        return this.successJSON(env);
    },
});
//# sourceMappingURL=env.js.map