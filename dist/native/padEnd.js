"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$padEnd",
    version: "1.0.6",
    description: "Pads a string at the end",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to pad at the end",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "max length",
            description: "The max length of the string",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
        {
            name: "filler",
            description: "The filler to use to pad",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [str, max, filler]) {
        return this.success(str.padEnd(max, filler || undefined));
    },
});
//# sourceMappingURL=padEnd.js.map