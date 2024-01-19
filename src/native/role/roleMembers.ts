import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleMembers",
    version: "1.0.0",
    description: "Returns the role member ids",
    brackets: false,
    unwrap: true,
    output: array<ArgType.Member>(),
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its members",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, role, sep]) {
        return this.success((role ?? ctx.role)?.members.map((x) => x.id).join(sep || ", "))
    },
})
