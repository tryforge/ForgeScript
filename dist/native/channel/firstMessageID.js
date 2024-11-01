"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$firstMessageID",
    version: "1.5.0",
    description: "Returns the first message sent in a channel",
    brackets: false,
    aliases: [
        "$channelFirstMessageID"
    ],
    unwrap: true,
    output: structures_1.ArgType.Message,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull first message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "messages" in i
        },
    ],
    async execute(ctx, [channel]) {
        channel ??= ctx.channel;
        const message = await channel?.messages.fetch({ after: "0", limit: 1 }).catch(ctx.noop);
        return this.success(message ? message.firstKey() : null);
    },
});
//# sourceMappingURL=firstMessageID.js.map