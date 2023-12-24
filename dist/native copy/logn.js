"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$logn",
    version: "1.0.0",
    description: "Returns the natural logarithm (base e) of a number",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "Number to get its logarithm",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(_, [n]) {
        return this.success(Math.log(n));
    },
});
//# sourceMappingURL=logn.js.map