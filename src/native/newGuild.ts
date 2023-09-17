import { GuildProperties, GuildProperty } from "../properties/guild"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$newGuild",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a guild instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: GuildProperty,
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
        return Return.success(GuildProperties[prop](ctx.states?.guild?.new, sep))
    },
})
