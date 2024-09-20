import { AuditProperties, AuditProperty } from "../../properties/audit"
import { RoleProperties, RoleProperty } from "../../properties/role"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$auditLog",
    version: "1.0.3",
    description: "Retrieves new data from an event whose context was an audit log instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: AuditProperty,
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
        return this.success(AuditProperties[prop](ctx.states?.audit?.new, sep))
    },
})
