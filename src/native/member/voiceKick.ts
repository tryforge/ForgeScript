import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$voiceKick",
    version: "1.4.0",
    description: "Kicks a member from voice channel",
    brackets: true,
    aliases: [
        "$memberVoiceKick"
    ],
    output: ArgType.Boolean,
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
            description: "The user to kick"
        },
        {
            name: "reason",
            description: "Reason to kick this user",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason ]) {
        return this.success(!!(await member.voice.disconnect(reason ?? undefined).catch(ctx.noop)))
    },
})