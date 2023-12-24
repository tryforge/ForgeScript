"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$charCodeAt",
    version: "1.0.6",
    description: "Returns the char code at given index",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to get char code of",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "index",
            description: "The index to get its char code",
            type: structures_1.ArgType.Number,
            rest: false,
            required: true,
        },
    ],
    execute(_, [m, index]) {
        return this.success(m.charCodeAt(index));
    },
});
//# sourceMappingURL=charCodeAt.js.map