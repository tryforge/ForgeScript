"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayJoin",
    version: "1.0.0",
    description: "Joins all elements from an array with given separator",
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
            name: "separator",
            description: "The separator to use for every element",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [name, sep]) {
        const arr = ctx.getEnvironmentKey(name);
        return this.success(Array.isArray(arr) ? arr.join(sep || ", ") : undefined);
    },
});
//# sourceMappingURL=arrayJoin.js.map