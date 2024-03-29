import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleRawPosition",
    version: "1.0.0",
    description: "Returns the role raw position",
    brackets: false,
    output: ArgType.Number,
    unwrap: true,
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
            description: "The role id return its raw position",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.rawPosition)
    },
})
