"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomNumber",
    version: "1.0.0",
    description: "Returns a random number (no cache)",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "min",
            description: "The minimum possible number",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max",
            description: "The max possible number",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "decimals",
            description: "Whether to use decimals",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(_, [min, max, decimals]) {
        const rnd = max ? Math.random() * (max - min) + min : Math.random() * min;
        return this.success(!decimals ? Math.floor(rnd) : rnd);
    },
});
//# sourceMappingURL=randomNumber.js.map