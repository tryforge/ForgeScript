import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementEndTimestamp",
    version: "1.5.0",
    description: "Returns the time at which this entitlement ends",
    output: ArgType.Time,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.endsTimestamp)
    },
})