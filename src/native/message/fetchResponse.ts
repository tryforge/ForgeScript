import { AttachmentBuilder, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { buildComponent } from "../../functions/componentBuilders"

export default new NativeFunction({
    name: "$fetchResponse",
    version: "1.4.0",
    brackets: false,
    unwrap: true,
    description: "Fetches all data from the message and loads it to response, this includes: embeds, components, attachments, stickers",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    execute(ctx, [, msg ]) {
        msg ??= ctx.message!
        if (msg) {
            ctx.container.embeds.push(...msg.embeds.map(x => EmbedBuilder.from(x)))
            ctx.container.components.push(...msg.components.map(x => buildComponent(ctx, x)))
            ctx.container.files.push(...msg.attachments.map(x => new AttachmentBuilder(x.url, { name: x.name })))
            ctx.container.stickers.push(...msg.stickers.map(x => x.id))
        }
        return this.success()
    },
})