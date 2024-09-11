import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodMentionTotalLimit",
    version: "1.5.0",
    description: "Sets a total mention limit for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "limit",
            description: "The limit of mentions to set",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    execute(ctx, [limit]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.mentionTotalLimit = limit
        return this.success()
    },
})