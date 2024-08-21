"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomBytes",
    version: "1.5.0",
    description: "Generates a string of random bytes, in hex",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "length",
            description: "The length of the hex string",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
    ],
    unwrap: true,
    execute(ctx, [len]) {
        return this.success((0, crypto_1.randomBytes)(len).toString("hex"));
    }
});
//# sourceMappingURL=randomBytes.js.map