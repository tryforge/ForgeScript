"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteMessage",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    aliases: [
        "$deleteMessages"
    ],
    description: "Deletes given messages, returns the count of messages deleted",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            check: (i) => i.isTextBased(),
            type: structures_1.ArgType.Channel,
        },
        {
            name: "messages",
            description: "The message ids to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [channel, messages]) {
        const ch = channel;
        if (!messages.length)
            return this.success(0);
        if (messages.length === 1) {
            try {
                await ch.messages.delete(messages[0]);
                return this.success(1);
            }
            catch (error) {
                ctx.noop(error);
                return this.success(0);
            }
        }
        const col = (await ch
            .bulkDelete(messages, true)
            .then((x) => x.size)
            .catch(ctx.noop)) ?? 0;
        return this.success(col);
    },
});
//# sourceMappingURL=deleteMessage.js.map