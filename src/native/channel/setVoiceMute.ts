import { noop } from "lodash"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setVoiceMute",
    category: "channel",
    version: "1.4.0",
    description: "Mutes a member from voice channel",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0,
            description: "The user to mute"
        },
        {
            name: "reason",
            description: "Reason to mute this user",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason ]) {
        return this.success(!!(await member.voice.setMute(true, reason ?? undefined).catch(noop)))
    },
})