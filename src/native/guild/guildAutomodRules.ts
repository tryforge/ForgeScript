import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleProperty, AutomodRuleProperties } from "../../properties/automodRule"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$guildAutomodRules",
    version: "1.5.0",
    description: "Returns all automod rules of a guild",
    aliases: ["$getAutomodRules"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rules from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each automod rule to return",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [ guild, prop, sep ]) {
        const rules = await (guild ?? ctx.guild)?.autoModerationRules?.fetch().catch(ctx.noop)

        if (rules && prop) {
            const data = rules.map(rule => AutomodRuleProperties[prop](rule, sep))
            return this.successJSON(data.every(item => typeof item === "object" && item !== null) ? data : data.join(sep ?? ", "))
        }

        return this.successJSON(rules)
    },
})