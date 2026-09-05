"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setChannelTopic",
    version: "1.0.0",
    description: "Sets a channel topic, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to set its topic",
            rest: false,
            check: (i) => "setTopic" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "topic",
            description: "The topic to set",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [channel, topic]) {
        return this.success(!!(await channel.setTopic(topic || null, ctx.reason).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setChannelTopic.js.map