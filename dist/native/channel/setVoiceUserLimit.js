"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceUserLimit",
    version: "1.4.0",
    description: "Sets the limit of users that can connect to this voice channel",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit user limit",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
        {
            name: "limit",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
            description: "The new user limit"
        },
        {
            name: "reason",
            description: "Reason to change the user limit",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, limit, reason]) {
        return this.success(!!(await channel.setUserLimit(limit, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceUserLimit.js.map