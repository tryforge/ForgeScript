"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pruneMembers",
    version: "1.5.0",
    aliases: [
        "$prune",
        "$membersPrune"
    ],
    description: "Prunes inactive members from the guild, returns number of kicked members",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to prune members from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "days",
            description: "The days of inactivity required to kick",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "dry",
            description: "Whether to perform a dry prune",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "reason",
            description: "The reason for pruning members",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "roles",
            description: "The roles to include when pruning",
            rest: true,
            type: structures_1.ArgType.Role,
        },
    ],
    async execute(ctx, [guild, days, dry, reason, roles]) {
        return this.success((await guild.members
            .prune({
            count: true,
            days: days || 7,
            dry: dry || false,
            roles: roles,
            reason: reason || undefined,
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=pruneMembers.js.map