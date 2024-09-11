import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodRegexFilter",
    version: "1.5.0",
    description: "Sets regex filter for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "regexes",
            description: "The regexes to use for filtering",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [regexes]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.regexPatterns = regexes
        return this.success()
    },
})