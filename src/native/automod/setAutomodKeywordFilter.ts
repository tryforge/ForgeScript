import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodKeywordFilter",
    version: "1.5.0",
    description: "Sets disallowed words for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "words",
            description: "The words to disallow and blacklist",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [words]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.keywordFilter = words
        return this.success()
    },
})