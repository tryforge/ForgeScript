import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberRawData",
    version: "1.5.0",
    description: "Returns the raw data of a member",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get raw data from",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [, member]) {
        return this.successJSON((member ?? ctx.member)?.toJSON())
    },
})