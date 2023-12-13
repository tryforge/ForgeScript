import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$nickname",
    version: "1.0.0",
    description: "Returns the member nickname",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The member id return its nick",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        return this.success((member ?? ctx.member)?.displayName)
    },
})
