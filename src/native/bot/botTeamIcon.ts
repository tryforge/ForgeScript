import { ImageExtension, ImageSize, Team } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botTeamIcon",
    version: "2.4.0",
    description: "Returns the client's team icon",
    aliases: [
        "$clientTeamIcon"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.URL,
    async execute(ctx, [size, ext]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(ctx.noop)
        const owner = ctx.client.application.owner
        return this.success(owner instanceof Team ? owner.iconURL({
            extension: (ext as ImageExtension) || undefined,
            size: (size as ImageSize) || 2048,
        }) : null)
    },
})