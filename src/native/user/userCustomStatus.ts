import { ActivityType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$userCustomStatus",
    version: "1.5.0",
    aliases: ["$customStatus"],
    description: "Returns the custom status of a user",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the user from",
            required: true,
            rest: false,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to return its custom status",
            required: true,
            rest: false,
            type: ArgType.User,
        },
        {
            name: "type",
            description: "The type of the custom status to fetch",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: false,
    async execute(ctx, [, user, opt]) {
        const member = await ctx.guild?.members.fetch(user ?? ctx.user?.id).catch(ctx.noop)
        const status = member?.presence?.activities?.find(x => x.type === ActivityType.Custom)
        const type = opt?.toLowerCase()

        if (!type || type === "state") {
            return this.success(status?.state || undefined)
        } else if (type === "emoji") {
            return this.success(status?.emoji?.toString() || undefined)
        }
        return this.success()
    },
})