"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const hex_1 = require("../../functions/hex");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hexToInt",
    version: "1.2.0",
    brackets: true,
    output: structures_1.ArgType.Color,
    description: "Turns hex string to number",
    unwrap: true,
    args: [
        {
            name: "hex",
            description: "The hex to convert",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [hex]) {
        return this.success((0, hex_1.hex2int)(hex));
    },
});
//# sourceMappingURL=hexToInt.js.map