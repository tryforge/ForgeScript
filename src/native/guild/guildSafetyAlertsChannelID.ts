import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildSafetyAlertsChannelID",
    version: "1.3.0",
    description: "Returns the server's safety alerts channel ID",
    brackets: false,
    aliases: [
        "$serverSafetyAlertsChannelID"
    ],
    output: ArgType.Channel,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.safetyAlertsChannelId)
    },
})
