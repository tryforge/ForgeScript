"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$base",
    version: "1.1.0",
    description: "Convert number from one base to another",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "number",
            description: "The target number for conversion",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "to",
            description: "The target base",
            type: structures_1.ArgType.Number,
            rest: false,
            required: true,
        },
        {
            name: "from",
            description: "The source base",
            type: structures_1.ArgType.Number,
            rest: false,
        },
    ],
    execute(_, [n, to, from]) {
        return this.success(parseInt(n, from ?? 10).toString(to));
    },
});
//# sourceMappingURL=base.js.map