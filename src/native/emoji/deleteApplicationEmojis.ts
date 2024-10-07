import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteApplicationEmojis",
    version: "1.5.0",
    description: "Deletes application emojis, returns the count of emojis deleted",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emojis",
            description: "The emojis to delete",
            rest: true,
            required: true,
            type: ArgType.ApplicationEmoji,
        },
    ],
    output: ArgType.Number,
    async execute(ctx, [emojis]) {
        let count = 0
        for (let i = 0, len = emojis.length; i < len; i++) {
            const emoji = emojis[i]
            const success = await emoji.delete().catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})