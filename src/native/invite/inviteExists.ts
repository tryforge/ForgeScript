import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$inviteExists",
    category: "invite",
    version: "1.0.0",
    description: "Returns whether an invite code exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(!!(await ctx.client.fetchInvite(id).catch(noop)))
    },
})
