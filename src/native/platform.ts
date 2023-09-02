import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$platform",
    version: "1.0.0",
    description: "Returns the member platforms",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "guild ID",
            description: "The member id return its platform",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        },
        {
            name: "separator",
            description: "The separator for each platform",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ guild, member, sep ]) {
        return Return.success(
            Object.keys((member ?? ctx.member)?.presence?.clientStatus ?? {}).join(sep || ", ")
        )
    }
})