import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiID",
    version: "1.2.0",
    description: "Returns the emoji id",
    brackets: false,
    unwrap: true,
    output: ArgType.Emoji,
    args: [
        {
            name: "emoji name",
            description: "The emoji name to return its id",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        if (this.hasFields) return this.success(ctx.client.emojis.cache.find((x) => x.name === emoji)?.id)

        return this.success(ctx.emoji?.id)
    },
})