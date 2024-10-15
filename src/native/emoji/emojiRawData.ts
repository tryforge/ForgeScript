import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiRawData",
    version: "1.5.0",
    description: "Returns the raw data of an emoji",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "emoji ID",
            rest: false,
            required: true,
            description: "The emoji to get raw data from",
            type: ArgType.Emoji,
        },
    ],
    output: ArgType.Json,
    execute(ctx, [emoji]) {
        return this.successJSON(emoji.toJSON())
    },
})