"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const poll_1 = require("../../properties/poll");
exports.default = new structures_1.NativeFunction({
    name: "$getPoll",
    version: "2.5.0",
    description: "Retrieves data of a poll from a message",
    aliases: ["$getMessagePoll"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: poll_1.PollProperty,
            required: true,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [, msg, prop]) {
        const poll = (msg ?? ctx.message)?.poll;
        return this.success(poll ? poll_1.PollProperties[prop](poll) : null);
    },
});
//# sourceMappingURL=getPoll.js.map