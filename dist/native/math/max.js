"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$max",
    version: "1.0.7",
    description: "Returns the largest number of the ones given",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the largest",
            rest: true,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(Math.max(...numbers));
    },
});
//# sourceMappingURL=max.js.map