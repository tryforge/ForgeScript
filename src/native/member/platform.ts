import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$platform",
    version: "1.0.0",
    description: "Returns the member platforms",
    brackets: false,
    unwrap: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member id return its platform",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator for each platform",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, member, sep]) {
        return this.success(Object.keys((member ?? ctx.member)?.presence?.clientStatus ?? {}).join(sep || ", "))
    },
})
