import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleIntColor",
    category: "role",
    version: "1.3.0",
    description: "Returns the role color as int",
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
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.color)
    },
})
