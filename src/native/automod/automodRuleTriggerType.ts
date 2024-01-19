import { AutoModerationActionType, AutoModerationRuleTriggerType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodRuleTriggerType",
    version: "1.2.0",
    description: "The rule trigger type used by automod",
    unwrap: false,
    output: AutoModerationRuleTriggerType,
    execute(ctx) {
        const trigger = ctx.automod?.ruleTriggerType
        return this.success(trigger ? AutoModerationRuleTriggerType[trigger] : null)
    },
})