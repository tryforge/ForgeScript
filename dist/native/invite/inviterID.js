"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new structures_1.NativeFunction({
    name: "$inviterID",
    version: "1.0.3",
    description: "Returns the user who invited this person",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to get its inviter",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0
        },
    ],
    output: structures_1.ArgType.User,
    execute(ctx, [guild, user]) {
        return this.success(InviteTracker_1.InviteTracker.Inviters.get(guild?.id ?? ctx.guild?.id)?.get(user?.id ?? ctx.user?.id)?.inviterId);
    },
});
//# sourceMappingURL=inviterID.js.map