import { AuditProperties, AuditProperty } from "../properties/audit"
import { RoleProperties, RoleProperty } from "../properties/role"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$auditLog",
    category: "unknown",
    version: "1.0.3",
    description: "Retrieves new data from an event whose context was audit log instance",
    brackets: true,
    unwrap: true,
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
