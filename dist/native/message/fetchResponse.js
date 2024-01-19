"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchResponse",
    version: "1.4.0",
    brackets: false,
    unwrap: true,
    description: "Fetches all data from the message and loads it to response, this includes: embeds, components, attachments, stickers",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
    ],
    execute(ctx, [, msg]) {
        msg ??= ctx.message;
        if (msg) {
            ctx.container.embeds.push(...msg.embeds.map(x => discord_js_1.EmbedBuilder.from(x)));
            ctx.container.components.push(...msg.components.map(x => discord_js_1.ActionRowBuilder.from(x)));
            ctx.container.files.push(...msg.attachments.map(x => new discord_js_1.AttachmentBuilder(x.url, { name: x.name })));
            ctx.container.stickers.push(...msg.stickers.map(x => x.id));
        }
        return this.success();
    },
});
//# sourceMappingURL=fetchResponse.js.map