"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayAt",
    version: "1.0.0",
    description: "Returns the element at given index",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "index",
            type: structures_1.ArgType.Number,
            description: "The index to get the element of",
            rest: false,
            required: true,
        },
    ],
    execute(ctx, [variable, index]) {
        const arr = ctx.getEnvironmentKey(variable);
        return this.successJSON(Array.isArray(arr) ? arr.at(index) : undefined);
    },
});
//# sourceMappingURL=arrayAt.js.map