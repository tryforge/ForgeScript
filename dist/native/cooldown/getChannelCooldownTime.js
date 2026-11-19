"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getChannelCooldownTime",
    version: "1.5.0",
    description: "Retrieves current cooldown time in ms for given channel id, binded to current command",
    brackets: true,
    output: structures_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its cooldown",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
    ],
    execute(ctx, [channel]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(ctx.client.cooldowns.identifier(ctx.cmd.id, "channel", channel.id)));
    },
});
//# sourceMappingURL=getChannelCooldownTime.js.map