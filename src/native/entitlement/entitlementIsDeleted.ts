import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementIsDeleted",
    version: "1.5.0",
    description: "Returns whether this entitlement is deleted",
    output: ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.deleted)
    },
})