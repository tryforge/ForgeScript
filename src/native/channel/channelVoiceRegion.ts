import { BaseChannel, VoiceChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { VoiceRegionType } from "./setVoiceRegion"

export default new NativeFunction({
    name: "$channelVoiceRegion",
    version: "1.5.0",
    description: "Returns the region of a voice channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its region",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
    ],
    output: VoiceRegionType,
    execute(ctx, [ch]) {
        const chan = (ch ?? ctx.channel) as VoiceChannel
        return this.success("rtcRegion" in chan ? chan.rtcRegion : undefined)
    },
})