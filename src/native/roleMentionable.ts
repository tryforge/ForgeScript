import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleMentionable",
    version: "1.0.0",
    description: "Returns whether the role is mentionable",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its mentionable state",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, role]) {
        return Return.success((role ?? ctx.role)?.mentionable)
    },
})
