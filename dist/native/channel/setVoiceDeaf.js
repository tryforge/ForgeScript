"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceDeaf",
    category: "channel",
    version: "1.4.0",
    description: "Deafens a member from voice channel",
    brackets: true,
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
            description: "The user to deafen"
        },
        {
            name: "reason",
            description: "Reason to deafen this user",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason]) {
        return this.success(!!(await member.voice.setDeaf(true, reason ?? undefined).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=setVoiceDeaf.js.map