"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayFill",
    version: "1.4.0",
    brackets: true,
    description: "Fills an array with given value",
    args: [
        {
            name: "variable",
            description: "The variable to load array from",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "value",
            description: "The value to fill the array with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Json
        }
    ],
    unwrap: true,
    execute(ctx, [v, n]) {
        ctx.getEnvironmentInstance(Array, v)?.fill(n);
        return this.success();
    },
});
//# sourceMappingURL=arrayFill.js.map