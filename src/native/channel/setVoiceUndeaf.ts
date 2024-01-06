import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setVoiceUndeaf",
    version: "1.4.0",
    description: "Undeafens a member from voice channel",
    brackets: true,
    aliases: [
        "$voiceUndeaf"
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
            description: "The user to undeafen"
        },
        {
            name: "reason",
            description: "Reason to undeafen this user",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason ]) {
        return this.success(!!(await member.voice.setDeaf(false, reason ?? undefined).catch(noop)))
    },
})