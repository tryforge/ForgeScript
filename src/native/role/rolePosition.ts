import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$rolePosition",
    version: "1.0.0",
    description: "Returns the role position",
    brackets: false,
    unwrap: true,
    output: ArgType.Number,
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
            description: "The role id return its position",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "asc order",
            description: "Whether to count roles in ascending order (top to bottom)",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [guild, role, asc]) {
        return this.success(asc ? guild.roles.cache.size - role.position : role.position)
    },
})