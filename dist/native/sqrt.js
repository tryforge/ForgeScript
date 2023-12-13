"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sqrt",
    version: "1.0.0",
    description: "Returns the square root of a number",
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
        return this.success(Math.sqrt(n));
    },
});
//# sourceMappingURL=sqrt.js.map