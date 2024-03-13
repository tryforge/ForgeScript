import { GuildDefaultMessageNotifications } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildDefaultMessageNotifications",
    version: "1.3.0",
    description: "Returns the default message notifications for this guild",
    brackets: false,
    aliases: [
        "$serverDefaultMessageNotifications"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: GuildDefaultMessageNotifications,
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success(GuildDefaultMessageNotifications[(guild ?? ctx.guild)?.defaultMessageNotifications])
    },
})
