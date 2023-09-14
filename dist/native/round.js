"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$round",
    version: "1.0.0",
    description: "Returns a supplied numeric expression rounded to the nearest integer",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [n]) {
        return structures_1.Return.success(Math.round(n));
    },
});
//# sourceMappingURL=round.js.map