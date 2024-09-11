import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodMentionRaidProtection",
    version: "1.5.0",
    description: "Sets mention raid protection for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enabled",
            description: "Whether to enable mention raid protection",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [enabled]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.mentionRaidProtectionEnabled = enabled
        return this.success()
    },
})