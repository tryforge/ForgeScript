"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayIncludes",
    version: "1.0.0",
    description: "Checks whether a value exists in an array",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "value",
            description: "The value to check for",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, value]) {
        const arr = ctx.getEnvironmentKey(name);
        return this.success(Array.isArray(arr) ? arr.includes(value) : false);
    },
});
//# sourceMappingURL=arrayIncludes.js.map