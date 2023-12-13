"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$trunc",
    version: "1.0.0",
    description: "Returns the integer part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(_, [n]) {
        return this.success(Math.trunc(n));
    },
});
//# sourceMappingURL=trunc.js.map