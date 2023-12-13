"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = require("zlib");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deflate",
    version: "1.2.0",
    description: "Compresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to compress",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The output encoding to use",
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [input, out]) {
        return this.success((0, zlib_1.deflateSync)(input).toString((out ?? "hex")));
    },
});
//# sourceMappingURL=deflate.js.map