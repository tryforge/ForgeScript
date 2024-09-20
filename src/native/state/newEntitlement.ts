import { EntitlementProperties, EntitlementProperty } from "../../properties/entitlement"
import { VoiceStateProperties, VoiceStateProperty } from "../../properties/voiceState"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newEntitlement",
    version: "1.5.0",
    description: "Retrieves new data from an event whose context was an entitlement instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EntitlementProperty,
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
        return this.success(EntitlementProperties[prop](ctx.states?.entitlement?.new, sep))
    },
})
