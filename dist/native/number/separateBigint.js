"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const separateNumber_1 = require("./separateNumber");
exports.default = new structures_1.NativeFunction({
    name: "$separateBigint",
    version: "1.3.0",
    description: "Separates thousands in the number",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "number",
            description: "The number to separate",
            rest: false,
            type: structures_1.ArgType.BigInt,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    execute(ctx, [n, sep]) {
        const t = n.toLocaleString();
        return this.success(sep ? t.replaceAll(separateNumber_1.NoNumberRegex, sep) : t);
    },
});
//# sourceMappingURL=separateBigint.js.map