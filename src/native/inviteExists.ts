import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inviteExists",
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
        return Return.success(!!(await ctx.client.fetchInvite(id).catch(noop)))
    },
})
