import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodAllowList",
    version: "1.5.0",
    description: "Sets allowed words for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "words",
            description: "The words to allow and whitelist",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [words]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.allowList = words
        return this.success()
    },
})