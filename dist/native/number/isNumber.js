"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isNumber",
    version: "1.0.0",
    description: "Returns whether the number is valid",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "number",
            description: "The number to check",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [n]) {
        return this.success(!!n && !isNaN(Number(n)));
    },
});
//# sourceMappingURL=isNumber.js.map