"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getGuildCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given guild id, binded to current command",
    brackets: true,
    aliases: [
        "$getServerCooldownTime"
    ],
    output: structures_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get its cooldown",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    execute(ctx, [guild]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd.id, "guild", guild.id)));
    },
});
//# sourceMappingURL=getGuildCooldownTime.js.map