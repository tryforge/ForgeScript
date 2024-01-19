import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setVoiceDeaf",
    version: "1.4.0",
    description: "Deafens a member from voice channel",
    brackets: true,
    aliases: [
        "$voiceDeaf"
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
            description: "The user to deafen"
        },
        {
            name: "reason",
            description: "Reason to deafen this user",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason ]) {
        return this.success(!!(await member.voice.setDeaf(true, reason ?? undefined).catch(ctx.noop)))
    },
})