"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const Formatter = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
});
exports.default = new structures_1.NativeFunction({
    name: "$abbreviateNumber",
    version: "1.0.0",
    description: "Abbreviates given number",
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to abbreviate",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [n]) {
        return this.success(Formatter.format(n));
    },
});
//# sourceMappingURL=abbreviateNumber.js.map