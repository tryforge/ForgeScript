"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceUndeaf",
    version: "1.4.0",
    description: "Undeafens a member from voice channel",
    brackets: true,
    aliases: [
        "$voiceUndeaf"
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
            description: "The user to undeafen"
        },
        {
            name: "reason",
            description: "Reason to undeafen this user",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason]) {
        return this.success(!!(await member.voice.setDeaf(false, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceUndeaf.js.map