import { ArgType, NativeFunction, Return } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"

export default new NativeFunction({
    name: "$getInvite",
    version: "2.2.0",
    description: "Returns information about an invite",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
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
    async execute(ctx, [code, prop]) {
        const invite = await ctx.client.fetchInvite(code).catch(ctx.noop)
        if (prop && invite) return this.success(InviteProperties[prop](invite))
        return this.successJSON(invite)
    },
})