"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ban",
    version: "1.0.0",
    description: "Bans a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to ban a member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to ban",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to ban for",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "delete message seconds",
            description: "Delete messages from this member that were sent in this seconds time span",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(_, [guild, user, reason, seconds]) {
        return this.success((await guild.members
            .ban(user, {
            reason: reason || undefined,
            deleteMessageSeconds: seconds || undefined,
        })
            .catch(() => false)) !== false);
    },
});
//# sourceMappingURL=ban.js.map