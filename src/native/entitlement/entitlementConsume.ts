import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$entitlementConsume",
    version: "1.5.0",
    description: "Consumes an entitlement from an interaction",
    unwrap: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement to consume",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ name ]) {
        return this.success(
            ctx.interaction?.entitlements.get(name)?.consume().then(() => true).catch(ctx.noop) ?? false
        )
    },
})