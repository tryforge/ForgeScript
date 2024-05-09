import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementID",
    version: "1.5.0",
    description: "Returns this entitlement's id",
    output: ArgType.String,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.entitlement?.id)
    },
})