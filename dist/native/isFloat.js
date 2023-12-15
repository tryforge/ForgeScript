"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isFloat",
    version: "1.0.0",
    description: "Returns whether the number is a float",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return this.success(n % 1 !== 0);
    },
});
//# sourceMappingURL=isFloat.js.map