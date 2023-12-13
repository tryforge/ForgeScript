import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$status",
    version: "1.0.0",
    description: "Returns the member status",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to return its status",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        return this.success((member ?? ctx.member)?.presence?.status)
    },
})
