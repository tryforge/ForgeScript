"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookSend",
    version: "1.0.0",
    description: "Sends a message with a webhook",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Message,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "content",
            description: "The content for the message",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "return message ID",
            description: "Return the message id of the sent message",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "username",
            description: "The username for the message",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "avatar",
            description: "The avatar for the message",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [url, content, returnMessageID, username, avatarUrl]) {
        const web = new discord_js_1.WebhookClient({ url });
        ctx.container.content = content || undefined;
        ctx.container.avatarURL = avatarUrl ?? undefined;
        ctx.container.username = username ?? undefined;
        const m = await ctx.container.send(web);
        return this.success(returnMessageID && m ? m.id : undefined);
    },
});
//# sourceMappingURL=webhookSend.js.map