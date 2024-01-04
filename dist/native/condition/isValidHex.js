"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexHashtagStripping = exports.MinHexIntValue = exports.MaxHexIntValue = void 0;
const structures_1 = require("../../structures");
exports.MaxHexIntValue = 0xffffff;
exports.MinHexIntValue = 0;
exports.HexHashtagStripping = /^#/;
exports.default = new structures_1.NativeFunction({
    name: "$isValidHex",
    version: "1.3.0",
    description: "Checks whether given hex is a valid integer number between 0x00000 and 0xffffff.",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "hex",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
            description: "The hex to check for"
        }
    ],
    execute(ctx, [hex]) {
        const int = parseInt(hex.replace(exports.HexHashtagStripping, ""), 16);
        return this.success(!isNaN(int) && int >= exports.MinHexIntValue && int <= exports.MaxHexIntValue);
    },
});
//# sourceMappingURL=isValidHex.js.map