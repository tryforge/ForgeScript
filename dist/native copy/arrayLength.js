"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayLength",
    version: "1.0.0",
    description: "Returns the numbers of elements in an array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, args) {
        const arr = ctx.getEnvironmentKey(...args);
        return this.success(Array.isArray(arr) ? arr.length : 0);
    },
});
//# sourceMappingURL=arrayLength.js.map