import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiName",
    description: "Returns the emoji id",
    brackets: false,
    unwrap: true,
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
        if (this.hasFields) return Return.success(ctx.client.emojis.cache.find((x) => x.name === emoji)?.id)

        return Return.success(ctx.emoji?.name)
    },
})
