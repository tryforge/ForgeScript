import { ChannelType, GuildChannelCreateOptions } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$createChannel",
    version: "1.0.0",
    description: "Creates a channel in a guild, returns the channel id",
    unwrap: true,
    brackets: true,
    output: ArgType.Channel,
    args: [
        {
            name: "guild ID",
            description: "The guild to create this channel on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel name",
            description: "The name for the channel",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "channel type",
            description: "The type of the channel, some are not supported",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelType,
            required: true,
        },
        {
            name: "topic",
            description: "The topic for the channel",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "parent ID",
            description: "The parent id for the channel",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, name, type, topic, parentId]) {
        const ch = await guild.channels
            .create({
                type: type as GuildChannelCreateOptions["type"],
                name,
                topic: topic || undefined,
                parent: parentId,
            })
            .catch(noop)
        return this.success(ch ? ch.id : undefined)
    },
})
