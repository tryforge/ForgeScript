import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteInvite",
    version: "1.0.0",
    brackets: true,
    description: "Deletes an invite, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for deleting the invite",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [code, reason]) {
        const invite = await ctx.client.fetchInvite(code).catch(ctx.noop)
        return this.success(!!(await invite?.delete(reason || undefined).catch(ctx.noop)))
    },
})