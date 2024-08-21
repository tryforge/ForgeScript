import { ActivityType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export enum CustomStatusType {
    state = "state",
    emoji = "emoji"
}

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
            type: ArgType.Enum,
            enum: CustomStatusType
        },
    ],
    brackets: false,
    async execute(ctx, [, user, type]) {
        const member = await ctx.guild?.members.fetch(user ?? ctx.user?.id).catch(ctx.noop)
        const status = member?.presence?.activities?.find(x => x.type === ActivityType.Custom)

        if (!type) {
            return this.success(status?.state)
        } else {
            return this.success(status?.[type as CustomStatusType]?.toString())
        }
    },
})