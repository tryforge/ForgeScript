import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$emojiIDs",
    category: "emoji",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every emoji id",
    args: [
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(ctx.client.emojis.cache.map(x => x.id).join(sep ?? ", "))
    },
})