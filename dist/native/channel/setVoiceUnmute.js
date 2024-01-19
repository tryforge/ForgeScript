"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceUnmute",
    version: "1.4.0",
    description: "Unmutes a member from voice channel",
    brackets: true,
    aliases: [
        "$voiceUnmute"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "user ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Member,
            pointer: 0,
            description: "The user to unmute"
        },
        {
            name: "reason",
            description: "Reason to unmute this user",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason]) {
        return this.success(!!(await member.voice.setMute(false, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceUnmute.js.map