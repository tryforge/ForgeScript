import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementIsGuildSubscription",
    version: "1.5.0",
    description: "Returns whether this entitlement is for a guild",
    output: ArgType.Boolean,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.isGuildSubscription())
    },
})