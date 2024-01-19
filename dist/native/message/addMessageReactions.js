"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addMessageReactions",
    version: "1.0.0",
    description: "Adds reactions to a message, returns amount of emojis successfully reacted",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
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
            description: "The message to add reactions to",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emojis",
            description: "The emojis to react with",
            rest: true,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    async execute(ctx, [, message, emojis]) {
        let count = 0;
        for (const emoji of emojis) {
            const success = await message.react(emoji).catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=addMessageReactions.js.map