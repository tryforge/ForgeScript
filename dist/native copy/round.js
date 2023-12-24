"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Rounds provided number to a certain number of decimal places",
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
        {
            name: "decimal places",
            description: "The number of decimal places to round to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    execute(_, [n, dp]) {
        dp = dp === null ? 1 : Math.pow(10, dp);
        return this.success(Math.round(n * dp) / dp);
    },
});
//# sourceMappingURL=round.js.map