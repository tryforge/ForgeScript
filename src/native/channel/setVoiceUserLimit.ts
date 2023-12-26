import { noop } from "lodash"
import { ArgType, NativeFunction } from "../../structures"
import { BaseChannel, VoiceChannel } from "discord.js"

export default new NativeFunction({
    name: "$setVoiceUserLimit",
    version: "1.4.0",
    description: "Sets the limit of users that can connect to this voice channel",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to edit user limit",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "limit",
            rest: false,
            type: ArgType.Number,
            required: true,
            description: "The new user limit"
        },
        {
            name: "reason",
            description: "Reason to change the user limit",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [channel, limit, reason ]) {
        return this.success(!!(await (channel as VoiceChannel).setUserLimit(limit, reason ?? undefined).catch(noop)))
    },
})