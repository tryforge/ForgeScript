import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleRawPosition",
    version: "1.0.0",
    description: "Returns the role raw position",
    brackets: false,
    unwrap: true,
    args: [
        {
            
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The role id return its raw position",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true
        },
    ],
    execute(ctx, [ guild, role ]) {
        return Return.success(
            (role ?? ctx.role)?.rawPosition
        )
    }
})