import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleColor",
    version: "1.0.0",
    description: "Returns the role color",
    brackets: false,
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
            description: "The role id return its color",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [guild, role]) {
        return Return.success((role ?? ctx.role)?.hexColor)
    },
})
