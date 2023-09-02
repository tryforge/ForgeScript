import { GuildProperties, GuildProperty } from "../properties/guild"
import { RoleProperties, RoleProperty } from "../properties/role"
import { UserProperties, UserProperty } from "../properties/user"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$newUser",
    description: "Retrieves new data from an event whose context was a user instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: UserProperty,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ prop, sep ]) {
        return Return.success(
            UserProperties[prop](ctx.states?.user?.new, sep)
        )
    },
})