"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$lastMessageID",
    version: "1.2.0",
    brackets: false,
    aliases: [
        "$channelLastMessageID"
    ],
    unwrap: true,
    output: structures_1.ArgType.Message,
    description: "Returns the latest message sent in a channel",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull last message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "messages" in i
        },
        {
            name: "user ID",
            description: "The user id to get its last message sent",
            rest: false,
            required: false,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [ch, user]) {
        ch ??= ctx.channel;
        if (user) {
            const messages = await ch.messages.fetch({ limit: 100 }).catch(ctx.noop);
            return this.success(messages ? messages.find(x => x.author.id === user.id)?.id : undefined);
        }
        return this.success(ch.lastMessageId);
    },
});
//# sourceMappingURL=lastMessageID.js.map