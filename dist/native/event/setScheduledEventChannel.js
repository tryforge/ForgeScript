"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setScheduledEventChannel",
    version: "2.6.0",
    description: "Sets a channel for the current scheduled event",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The voice channel of the scheduled event",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
    ],
    execute(ctx, [channel]) {
        ctx.scheduledEvent.channel = channel;
        return this.success();
    },
});
//# sourceMappingURL=setScheduledEventChannel.js.map