import { AutoModerationActionType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodRuleID",
    version: "1.2.0",
    description: "Returns the rule id used by automod",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.automod?.ruleId)
    },
})