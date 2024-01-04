import { RoleProperties, RoleProperty } from "../../properties/role"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newRole",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a role instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: RoleProperty,
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
        return this.success(RoleProperties[prop](ctx.states?.role?.new, sep))
    },
})
