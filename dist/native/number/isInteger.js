"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isInteger",
    version: "1.0.0",
    description: "Returns whether the number is an integer",
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
        return this.success(!!n && !isNaN(Number(n)) && (0, lodash_1.isInteger)(Number(n)));
    },
});
//# sourceMappingURL=isInteger.js.map