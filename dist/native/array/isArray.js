"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isArray",
    version: "2.7.0",
    description: "Checks whether given array is valid",
    aliases: ["$isValidArray"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "array",
            description: "The array to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Json,
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [arr]) {
        return this.success(Array.isArray(arr));
    },
});
//# sourceMappingURL=isArray.js.map