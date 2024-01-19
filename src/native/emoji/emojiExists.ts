import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$emojiExists",
    version: "1.0.0",
    description: "Returns whether an emoji id exists",
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && ctx.client.emojis.cache.has(id))
    },
})
