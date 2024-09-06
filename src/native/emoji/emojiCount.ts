import { ArgType, NativeFunction, Return } from "../../structures"

export enum EmojiType {
    normal = "normal",
    animated = "animated"
}

export default new NativeFunction({
    name: "$emojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "type",
            description: "The type of the emotes to count",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: EmojiType
        },
    ],
    output: ArgType.Number,
    execute(ctx, [type]) {
        const emojis = ctx.client.emojis.cache

        return this.success(!type ? emojis.size : emojis.filter(emoji =>
            type === EmojiType.normal
                ? !emoji.animated
                : type === EmojiType.animated
                    ? emoji.animated
                    : (true as never)
        ).size)
    },
})