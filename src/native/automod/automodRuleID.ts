import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodRuleID",
    category: "automod",
    version: "1.2.0",
    description: "The rule id used by automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.ruleId)
    },
})