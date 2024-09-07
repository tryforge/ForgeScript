import { BaseChannel, GuildVoiceChannelResolvable } from "discord.js"
import noop from "../../functions/noop"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$voiceMove",
    version: "1.4.0",
    description: "Moves a member from a voice channel, returns bool",
    brackets: true,
    aliases: [
        "$memberVoiceMove"
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
            description: "The user to move"
        },
        {
            name: "channel ID",
            description: "The voice channel to move this user to",
            rest: false,
            required: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isVoiceBased()
        },
        {
            name: "reason",
            description: "The reason for moving the user",
            rest: false,
            type: ArgType.String,
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, voice, reason ]) {
        return this.success(!!(await member.voice.setChannel(voice as GuildVoiceChannelResolvable, reason || undefined).catch(ctx.noop)))
    },
})