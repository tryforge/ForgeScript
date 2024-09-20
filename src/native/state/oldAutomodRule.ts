import { AutomodRuleProperties, AutomodRuleProperty } from "../../properties/automodRule"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$oldAutomodRule",
    version: "1.5.0",
    description: "Retrieves old data from an event whose context was an automod rule instance",
    brackets: true,
    output: ArgType.Unknown,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(AutomodRuleProperties[prop](ctx.states?.automodRule?.old, sep))
    },
})