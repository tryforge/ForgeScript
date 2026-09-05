"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$abs",
    version: "1.0.1",
    description: "Returns the absolute value of a number (the value without regard to whether it is positive or negative)",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "number",
            description: "The number to use",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [n]) {
        return this.success(Math.abs(n));
    },
});
//# sourceMappingURL=abs.js.map