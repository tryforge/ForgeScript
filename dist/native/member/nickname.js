"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$nickname",
    version: "1.0.0",
    description: "Returns the member nickname",
    brackets: false,
    aliases: ["$memberNickname"],
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to return its nickname",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member;
        return this.success(member instanceof discord_js_1.GuildMember ? member?.nickname : ctx.interaction?.member?.nick);
    },
});
//# sourceMappingURL=nickname.js.map