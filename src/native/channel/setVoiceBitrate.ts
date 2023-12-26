import { noop } from "lodash"
import { ArgType, NativeFunction } from "../../structures"
import { BaseChannel, VoiceChannel } from "discord.js"

export default new NativeFunction({
    name: "$setVoiceBitrate",
    version: "1.4.0",
    description: "Sets the bitrate quality voice channel",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit bitrate",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "bitrate",
            rest: false,
            type: ArgType.Number,
            required: true,
            description: "The new bitrate"
        },
        {
            name: "reason",
            description: "Reason to change the bitrate",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, bitrate, reason ]) {
        return this.success(!!(await (channel as VoiceChannel).setBitrate(bitrate, reason ?? undefined).catch(noop)))
    },
})