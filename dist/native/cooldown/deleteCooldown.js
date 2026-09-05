"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteCooldown",
    version: "1.0.3",
    description: "Deletes cooldown of given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to delete its cooldown",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(id);
        return this.success();
    },
});
//# sourceMappingURL=deleteCooldown.js.map