import { UserProperties, UserProperty } from "../../properties/user"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$oldUser",
    version: "1.0.0",
    description: "Retrieves old data from an event whose context was a user instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: UserProperty,
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
        return this.success(UserProperties[prop](ctx.states?.user?.old, sep))
    },
})
