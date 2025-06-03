import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildInviteExists",
    version: "2.4.0",
    description: "Returns whether a guild invite code exists",
    aliases: ["$serverInviteExists"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull invites from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, code]) {
        return this.success((await guild.invites.fetch(code).catch(() => false)) !== false)
    },
})