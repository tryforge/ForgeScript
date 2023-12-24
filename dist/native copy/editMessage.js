"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editMessage",
    version: "1.0.0",
    description: "Edits a message in a channel",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit this message",
            required: true,
            type: structures_1.ArgType.Channel,
            rest: false,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to edit",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "content",
            description: "The content for the message",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    brackets: true,
    async execute(ctx, [, opt, content]) {
        ctx.container.content = content || undefined;
        ctx.container.edit = true;
        const msg = await ctx.container.send(opt);
        return this.success(!!msg);
    },
});
//# sourceMappingURL=editMessage.js.map