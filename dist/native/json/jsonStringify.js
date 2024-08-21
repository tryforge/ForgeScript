"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$jsonStringify",
    version: "1.5.0",
    output: NativeFunction_1.ArgType.Json,
    description: "Returns the JSON in stringified format",
    args: [
        {
            name: "variable",
            description: "The variable to stringify",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "space",
            description: "The space to use",
            type: NativeFunction_1.ArgType.Number,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [env, space]) {
        return this.successJSON(JSON.stringify(ctx.getEnvironmentKey(env), undefined, space || undefined));
    }
});
//# sourceMappingURL=jsonStringify.js.map