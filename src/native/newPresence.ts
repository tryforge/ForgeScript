import { PresenceProperties, PresenceProperty } from "../properties/presence"
import { RoleProperties, RoleProperty } from "../properties/role"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$newPresence",
    version: "1.1.0",
    description: "Retrieves new data from an event whose context was a presence instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: PresenceProperty,
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
        return Return.success(PresenceProperties[prop](ctx.states?.presence?.new, sep))
    },
})
