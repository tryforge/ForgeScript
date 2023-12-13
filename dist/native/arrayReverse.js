"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayReverse",
    version: "1.0.0",
    description: "Reverses an array and loads it to another variable",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable where the array is held",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "other variable",
            description: "The variable to load the result to",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [var1, var2]) {
        const arr = ctx.getEnvironmentKey(var1);
        if (Array.isArray(arr)) {
            ctx.setEnvironmentKey(var2, arr.reverse());
        }
        return this.success();
    },
});
//# sourceMappingURL=arrayReverse.js.map