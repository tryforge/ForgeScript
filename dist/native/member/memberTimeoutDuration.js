"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberTimeoutDuration",
    version: "1.5.0",
    aliases: [
        "$timeoutDuration",
        "$getTimeoutDuration",
        "$timedOutUntil",
        "$memberTimedOutUntil"
    ],
    description: "Returns the timeout duration of a member",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Number,
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
            description: "The member to get duration for",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success(member instanceof discord_js_1.GuildMember
            ? member?.communicationDisabledUntil?.getTime() ?? 0
            : ("communication_disabled_until" in (ctx.interaction?.member ?? {}) ? new Date((ctx.interaction?.member).communication_disabled_until).getTime() : 0));
    },
});
//# sourceMappingURL=memberTimeoutDuration.js.map