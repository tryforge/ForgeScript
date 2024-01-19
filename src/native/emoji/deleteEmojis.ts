import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$deleteEmojis",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    description: "Delete given emoji ids, returns the count of emotes deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete emotes from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "emojis",
            description: "The emojis to delete",
            rest: true,
            pointer: 0,
            required: true,
            type: ArgType.GuildEmoji,
        },
    ],
    async execute(ctx, [, emotes]) {
        let count = 0
        for (let i = 0, len = emotes.length; i < len; i++) {
            const emote = emotes[i]
            const success = await emote.delete().catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})
