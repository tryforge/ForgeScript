"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ceil",
    version: "1.5.0",
    description: "Returns the smallest integer greater than or equal to its numeric argument",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.ceil(n));
    },
});
//# sourceMappingURL=ceil.js.map