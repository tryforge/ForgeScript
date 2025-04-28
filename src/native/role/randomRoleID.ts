import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$randomRoleID",
    version: "1.5.0",
    description: "Returns a random role ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get the role from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
    ],
    output: ArgType.Role,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.roles.cache.randomKey())
    },
})