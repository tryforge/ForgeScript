import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementIsActive",
    version: "1.5.0",
    description: "Returns whether this entitlement is active",
    output: ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.isActive())
    },
})