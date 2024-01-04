import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$roleEditable",
    version: "1.3.0",
    description: "Returns whether the role is editable by the bot",
    brackets: false,
    unwrap: true,
    output: ArgType.Boolean,
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
            description: "The role id return its editable state",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return this.success((role ?? ctx.role)?.editable)
    },
})
