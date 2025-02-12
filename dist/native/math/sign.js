"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sign",
    version: "2.2.0",
    description: "Returns the sign of the x, indicating whether x is positive, negative or zero",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.sign(n));
    },
});
//# sourceMappingURL=sign.js.map