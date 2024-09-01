import { BaseChannel, CategoryChannel, ChannelType, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$setChannelCategory",
    version: "1.5.0",
    aliases: ["$setChannelParent"],
    description: "Sets a channel's category, returns bool",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its category",
            rest: false,
            check: (i: BaseChannel) => "setParent" in i,
            type: ArgType.Channel,
            required: true,
        },
        {
            name: "category ID",
            description: "The category to set",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildCategory
        },
    ],
    async execute(ctx, [channel, parent]) {
        return this.success(!!(await (channel as TextChannel).setParent(parent as CategoryChannel || null).catch(ctx.noop)))
    },
})