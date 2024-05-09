import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$hasAnyEntitlement",
    version: "1.5.0",
    aliases: [
        "$interactionHasAnyEntitlement"
    ],
    description: "Checks whether this interaction user has any of the given entitlements",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlements to validate",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ names ]) {
        return this.success(ctx.interaction?.entitlements.hasAny(...names))
    },
})