import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$voiceID",
    version: "1.0.3",
    description: "Returns the voice channel id a member is connected to",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            required: true,
            rest: false,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to get its voice channel",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, m]) {
        m ??= ctx.member!
        return this.success(m?.voice.channelId)
    },
})
