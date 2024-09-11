import { AutoModerationRuleKeywordPresetType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodPresets",
    version: "1.5.0",
    description: "Sets preset keyword wordsets for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "presets",
            description: "The preset keyword types to set",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationRuleKeywordPresetType
        },
    ],
    execute(ctx, [presets]) {
        ctx.automodRule.triggerMetadata ??= {}
        ctx.automodRule.triggerMetadata.presets = presets
        return this.success()
    },
})