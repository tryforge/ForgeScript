"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberJoinedAt",
    version: "1.0.0",
    description: "Returns the timestamp the member joined at",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get its join date",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Member,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success(member instanceof discord_js_1.GuildMember
            ? member?.joinedTimestamp
            : ("joined_at" in (ctx.interaction?.member ?? {}) ? new Date((ctx.interaction?.member).joined_at).getTime() : null));
    },
});
//# sourceMappingURL=memberJoinedAt.js.map