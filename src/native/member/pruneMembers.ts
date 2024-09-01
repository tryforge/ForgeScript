import { decrypt } from "dotenv"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$pruneMembers",
    version: "1.5.0",
    aliases: [
        "$prune",
        "$membersPrune"
    ],
    description: "Prunes inactive members from the guild, returns number of kicked members",
    unwrap: true,
    brackets: true,
    output: ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to prune members from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "days",
            description: "The days of inactivity required to kick",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "dry",
            description: "Whether to perform a dry prune",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for pruning members",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "roles",
            description: "The roles to include when pruning",
            rest: true,
            type: ArgType.Role,
        },
    ],
    async execute(ctx, [ guild, days, dry, reason, roles ]) {
        return this.success(
            (await guild.members
                .prune({
                    count: true,
                    days: days || 7,
                    dry: dry || false,
                    roles: roles,
                    reason: reason || undefined,
                }).catch(ctx.noop))
        )
    },
})