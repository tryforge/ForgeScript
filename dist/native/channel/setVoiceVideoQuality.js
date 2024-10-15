"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceVideoQuality",
    version: "1.5.0",
    description: "Sets the video quality of a voice channel, returns bool",
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit video quality",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
        {
            name: "quality",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.VideoQualityMode,
            description: "The new video quality"
        },
        {
            name: "reason",
            description: "Reason to change the video quality",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, quality, reason]) {
        return this.success(!!(await channel.setVideoQualityMode(quality, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceVideoQuality.js.map