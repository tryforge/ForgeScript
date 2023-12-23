import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleFlags",
    version: "1.3.0",
    description: "Returns the role flags",
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
            description: "The role id return its flags",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, role, sep]) {
        return this.success((role ?? ctx.role)?.flags.toArray().join(sep || ", "))
    },
})
