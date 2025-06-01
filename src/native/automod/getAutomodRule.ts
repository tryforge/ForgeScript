import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleProperty, AutomodRuleProperties } from "../../properties/automodRule"

export default new NativeFunction({
    name: "$getAutomodRule",
    version: "1.5.0",
    description: "Returns an automod rule of a guild",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rule from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The id of the automod rule to get",
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of the automod rule to return",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [ guild, id, prop, sep ]) {
        const rule = await (guild ?? ctx.guild)?.autoModerationRules.fetch(id).catch(ctx.noop)
        if (prop && rule) return this.success(AutomodRuleProperties[prop](rule, sep))
        return this.successJSON(rule)
    },
})