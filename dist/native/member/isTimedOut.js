"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isTimedOut",
    version: "1.0.0",
    description: "Whether an member is timed out",
    unwrap: true,
    brackets: false,
    aliases: [
        "$memberIsTimedOut"
    ],
    output: structures_1.ArgType.Boolean,
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
            description: "The member to check for timeout",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success(member instanceof discord_js_1.GuildMember
            ? member?.isCommunicationDisabled() ?? false
            : !!ctx.interaction?.member?.communication_disabled_until);
    },
});
//# sourceMappingURL=isTimedOut.js.map