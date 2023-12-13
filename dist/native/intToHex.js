"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hex_1 = require("../functions/hex");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$intToHex",
    version: "1.2.0",
    brackets: true,
    description: "Turns integer to hex",
    unwrap: true,
    args: [
        {
            name: "int",
            description: "The integer to convert",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [hex]) {
        return this.success((0, hex_1.int2hex)(hex));
    },
});
//# sourceMappingURL=intToHex.js.map