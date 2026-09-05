"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$localeCompare",
    version: "2.7.0",
    description: "Compares two strings, returns their relative order",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "first",
            description: "The first string to compare",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "second",
            description: "The second string to compare against first string",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [a, b]) {
        return this.success(a.localeCompare(b));
    },
});
//# sourceMappingURL=localeCompare.js.map