import { ArgType, NativeFunction } from "../../structures"
import { BaseChannel, VideoQualityMode, VoiceChannel } from "discord.js"

export default new NativeFunction({
    name: "$setVoiceVideoQuality",
    version: "1.5.0",
    description: "Sets the video quality of a voice channel, returns bool",
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit video quality",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "quality",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: VideoQualityMode,
            description: "The new video quality"
        },
        {
            name: "reason",
            description: "Reason to change the video quality",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, quality, reason]) {
        return this.success(!!(await (channel as VoiceChannel).setVideoQualityMode(quality, reason ?? undefined).catch(ctx.noop)))
    },
})