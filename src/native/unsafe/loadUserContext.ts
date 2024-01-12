import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadUserContext",
    version: "1.4.0",
    aliases: [
        "$useUserContext",
        "asUserContext"
    ],
    brackets: true,
    description: "Loads a user instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to adapt context with",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    execute(ctx, [ u ]) {
        ctx.obj = u
        return this.success()
    },
})