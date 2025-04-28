import { Arg, ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildChannelID",
    version: "1.4.0",
    description: "Gets the guild channel id of a channel name",
    unwrap: true,
    output: ArgType.Channel,
    brackets: false,
    args: [
        Arg.requiredGuild(),
        {
            name: "name",
            description: "The channel name to get its id",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [g, str]) {
        if (!this.hasFields) return this.success(ctx.channel?.id)
        return this.success(g.channels.cache.find((x) => "name" in x && x.name === str)?.id)
    },
})
