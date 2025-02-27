import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildInvitesDisabledUntil",
    version: "2.2.0",
    description: "Returns the invites disabled timestamp of a guild",
    aliases: [
        "$serverInvitesDisabledUntil"
    ],
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.incidentsData?.invitesDisabledUntil?.getTime() ?? 0)
    },
})