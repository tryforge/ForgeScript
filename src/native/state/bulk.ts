import { AuditProperties, AuditProperty } from "../../properties/audit"
import { BulkProperties, BulkProperty } from "../../properties/bulk"
import { RoleProperties, RoleProperty } from "../../properties/role"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bulk",
    version: "1.4.0",
    description: "Retrieves data from an event whose context was a bulk delete event",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: BulkProperty,
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
        return this.success(BulkProperties[prop](ctx.states?.bulk?.new, sep))
    },
})
