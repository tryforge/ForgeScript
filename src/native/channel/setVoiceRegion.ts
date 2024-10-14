import { BaseChannel, VoiceChannel } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export enum VoiceRegionType {
    brazil = "brazil",
    hongkong = "hongkong",
    india = "india",
    japan = "japan",
    rotterdam = "rotterdam",
    russia = "russia",
    singapore = "singapore",
    "south-korea" = "south-korea",
    southafrica = "southafrica",
    sydney = "sydney",
    "us-central" = "us-central",
    "us-east" = "us-east",
    "us-south" = "us-south",
    "us-west" = "us-west"
}

export default new NativeFunction({
    name: "$setVoiceRegion",
    version: "1.5.0",
    description: "Sets the region of a voice channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set region",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "region",
            description: "The region to set, leave empty to remove a fixed region",
            rest: false,
            required: false,
            type: ArgType.Enum,
            enum: VoiceRegionType
        },
        {
            name: "reason",
            description: "Reason to set the voice region",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [voice, region, reason]) {
        return this.success(!!(await (voice as VoiceChannel).setRTCRegion(region || null, reason ?? undefined).catch(ctx.noop)))
    },
})