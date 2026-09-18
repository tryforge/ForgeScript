"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isThreadOnly",
    description: "Returns whether the channel is a thread only channel",
    aliases: ["$channelIsThreadOnly"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [channel]) {
        return this.success(!!(channel ?? ctx.channel)?.isThreadOnly());
    },
});
//# sourceMappingURL=isThreadOnly.js.map