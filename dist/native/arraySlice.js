"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arraySlice",
    version: "1.0.0",
    description: "Slices an array and loads it to another variable",
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
        {
            name: "start",
            description: "The start index to slice",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "end",
            description: "The end index to slice",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [var1, var2, start, end]) {
        const arr = ctx.getEnvironmentKey(var1);
        if (Array.isArray(arr)) {
            ctx.setEnvironmentKey(var2, arr.slice(start, end || undefined));
        }
        return this.success();
    },
});
//# sourceMappingURL=arraySlice.js.map