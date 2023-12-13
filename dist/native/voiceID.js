"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$voiceID",
    version: "1.0.3",
    description: "Returns the voice channel id a member is connected to",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            required: true,
            rest: false,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to get its voice channel",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, m]) {
        m ??= ctx.member;
        return this.success(m?.voice.channelId);
    },
});
//# sourceMappingURL=voiceID.js.map