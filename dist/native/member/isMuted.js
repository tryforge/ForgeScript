"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isMuted",
    version: "1.0.0",
    description: "Whether a member is muted",
    brackets: false,
    unwrap: true,
    aliases: [
        "$memberIsMuted"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get its voice state",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success((member instanceof discord_js_1.GuildMember ? member?.voice.mute : ctx.interaction?.member?.mute) ?? false);
    },
});
//# sourceMappingURL=isMuted.js.map