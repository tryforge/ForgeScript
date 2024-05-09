import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$hasEntitlement",
    version: "1.5.0",
    aliases: [
        "$interactionHasEntitlement"
    ],
    description: "Checks whether this interaction user has given entitlement",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "entitlement name",
            description: "The name of the entitlement to validate",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ name ]) {
        return this.success(ctx.interaction?.entitlements.has(name))
    },
})