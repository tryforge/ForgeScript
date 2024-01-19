"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceBitrate",
    version: "1.4.0",
    description: "Sets the bitrate quality voice channel",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit bitrate",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
        {
            name: "bitrate",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
            description: "The new bitrate"
        },
        {
            name: "reason",
            description: "Reason to change the bitrate",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, bitrate, reason]) {
        return this.success(!!(await channel.setBitrate(bitrate, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceBitrate.js.map