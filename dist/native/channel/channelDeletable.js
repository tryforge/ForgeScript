"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelDeletable",
    version: "2.4.0",
    description: "Returns whether the channel is deletable",
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
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel;
        return this.success(chan && "deletable" in chan ? chan.deletable : false);
    },
});
//# sourceMappingURL=channelDeletable.js.map