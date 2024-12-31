import { ActivityType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export enum CustomStatusType {
    state = "state",
    emoji = "emoji"
}

export default new NativeFunction({
    name: "$memberCustomStatus",
    version: "1.5.0",
    aliases: [
        "$customStatus",
        "$userCustomStatus"
    ],
    description: "Returns the custom status of a member",
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
            type: ArgType.Member,
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
    async execute(ctx, [, member, type]) {
        const status = (member ?? ctx.member)?.presence?.activities?.find(x => x.type === ActivityType.Custom)
        
        return this.success(type ? status?.[type as CustomStatusType]?.toString() : status?.state)
    }
})