"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageCreatedAt",
    version: "1.0.2",
    description: "Returns the timestamp of the message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its timestamp",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, message]) {
        return this.success(discord_js_1.MessageType[(message ?? ctx.message)?.createdTimestamp]);
    },
});
//# sourceMappingURL=messageCreatedAt.js.map