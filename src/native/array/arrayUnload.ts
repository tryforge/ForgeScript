import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayUnload",
    version: "1.0.0",
    description: "Unloads an array from an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to unload this array from",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name]) {
        ctx.deleteEnvironmentKey(name)
        return this.success()
    },
})
