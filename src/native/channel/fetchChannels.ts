import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchChannels",
    version: "2.2.0",
    description: "Caches all channels of a guild",
    aliases: ["$fetchChannel"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache channels of",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The channel to fetch",
            rest: false,
            type: ArgType.Channel,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, channel]) {
        guild ??= ctx.guild!
        if (channel) await guild?.channels.fetch(channel.id)
            else await guild?.channels.fetch()
        return this.success()
    },
})