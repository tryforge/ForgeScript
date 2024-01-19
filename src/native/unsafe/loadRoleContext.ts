import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadRoleContext",
    version: "1.4.0",
    aliases: [
        "$useRoleContext",
        "$asRoleContext"
    ],
    description: "Loads a role instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull role from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "role ID",
            description: "The role to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Role,
            pointer: 0
        }
    ],
    execute(ctx, [, r ]) {
        ctx.obj = r
        return this.success()
    },
})