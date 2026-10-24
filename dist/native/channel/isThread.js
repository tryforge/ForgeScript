"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isThread",
    version: "2.8.0",
    description: "Returns whether the channel is a thread",
    aliases: ["$channelIsThread"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to check",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [channel]) {
        return this.success(!!(channel ?? ctx.channel)?.isThread());
    },
});
//# sourceMappingURL=isThread.js.map