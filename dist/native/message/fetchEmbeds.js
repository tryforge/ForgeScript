"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchEmbeds",
    version: "1.4.0",
    aliases: [
        "$fetchEmbed"
    ],
    description: "Fetches an embed or all embeds from a message to the next response",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to get embeds from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The embed index to load",
            rest: false,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [, msg, index]) {
        msg ??= ctx.message;
        const embeds = msg?.embeds;
        if (embeds === undefined)
            return this.success();
        if (typeof index === "number") {
            const embed = embeds[index];
            if (!embed)
                return this.success();
            ctx.container.embeds.push(discord_js_1.EmbedBuilder.from(embed));
            return this.success();
        }
        ctx.container.embeds.push(...embeds.map(x => discord_js_1.EmbedBuilder.from(x)));
        return this.success();
    },
});
//# sourceMappingURL=fetchEmbeds.js.map