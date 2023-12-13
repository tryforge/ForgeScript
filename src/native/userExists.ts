import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userExists",
    version: "1.0.0",
    description: "Returns whether a user id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && !!(await ctx.client.users.fetch(id).catch(noop)))
    },
})
