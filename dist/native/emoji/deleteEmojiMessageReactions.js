"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteEmojiMessageReactions",
    version: "1.0.0",
    description: "Deletes all emoji reactions from a message, returns amount of reaction emojis successfully deleted",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove emoji reactions from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emojis",
            description: "The emojis to delete from this message",
            required: true,
            pointer: 1,
            rest: true,
            type: structures_1.ArgType.Reaction,
        },
    ],
    async execute(ctx, [, , emojis]) {
        let count = 0;
        for (const emoji of emojis) {
            const success = await emoji.remove().catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteEmojiMessageReactions.js.map