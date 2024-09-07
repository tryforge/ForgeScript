import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildHighestRoleID",
    version: "1.5.0",
    description: "Returns the highest role id of a guild",
    aliases: [
        "$serverHighestRoleID"
    ],
    brackets: false,
    output: ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve its highest role",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild).roles.highest.id)
    },
})