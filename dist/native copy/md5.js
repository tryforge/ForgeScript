"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$md5",
    version: "1.2.0",
    description: "Creates a md5 key from given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "Input to use for feeding",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "encoding",
            type: structures_1.ArgType.String,
            description: "The output encoding",
            rest: false,
            required: false
        }
    ],
    execute(ctx, [input, enc]) {
        const md5 = (0, crypto_1.createHash)("md5").update(input).digest().toString((enc || "hex"));
        return this.success(md5);
    }
});
//# sourceMappingURL=md5.js.map