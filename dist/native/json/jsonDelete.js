"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$jsonDelete",
    version: "1.4.0",
    description: "Deletes a key from a traversed JSON",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "keys",
            description: "The keys to use to traverse the object",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [keys]) {
        return this.success(ctx.traverseDeleteEnvironmentKey(...keys));
    },
});
//# sourceMappingURL=jsonDelete.js.map