"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoNumberRegex = void 0;
const structures_1 = require("../../structures");
exports.NoNumberRegex = /[^0-9.-]/g;
exports.default = new structures_1.NativeFunction({
    name: "$separateNumber",
    version: "1.0.0",
    description: "Separates thousands in the number",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "number",
            description: "The number to separate",
            rest: false,
            type: structures_1.ArgType.Number,
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
        return this.success(sep ? t.replaceAll(exports.NoNumberRegex, sep) : t);
    },
});
//# sourceMappingURL=separateNumber.js.map