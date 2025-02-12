import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"

export default new NativeFunction({
    name: "$getGuildInvite",
    version: "2.2.0",
    description: "Returns information about a guild invite",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch invite from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "property",
            description: "The property of the invite to return",
            rest: false,
            type: ArgType.Enum,
            enum: InviteProperty
        },
    ],
    async execute(ctx, [guild, code, prop]) {
        const invite = await guild.invites.fetch(code).catch(ctx.noop)
        if (prop && invite) return this.success(InviteProperties[prop](invite))
        return this.successJSON(invite)
    },
})