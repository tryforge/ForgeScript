import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$roleHoisted",
    description: "Returns whether the role is hoisted",
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
            description: "The role id return its hoisted state",
            rest: false,
            type: ArgType.Role,
            pointer: 0,
            required: true
        },
    ],
    execute(ctx, [ guild, role ]) {
        return Return.success(
            (role ?? ctx.role)?.hoist
        )
    }
})