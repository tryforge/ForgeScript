"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$arrayRandomIndex",
    version: "1.4.0",
    description: "Returns a random index",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable);
        return this.successJSON(Array.isArray(arr) ? Math.floor(Math.random() * arr.length) : undefined);
    },
});
//# sourceMappingURL=arrayRandomIndex.js.map