"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayUnshiftJSON",
    version: "1.3.0",
    description: "Adds elements to the beginning of an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "values",
            description: "The values to append at the start of the array",
            rest: true,
            required: true,
            type: structures_1.ArgType.Json,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const arr = ctx.getEnvironmentKey(name);
        if (Array.isArray(arr))
            arr.unshift(...values);
        return this.success();
    },
});
//# sourceMappingURL=arrayUnshiftJSON.js.map