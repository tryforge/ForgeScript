import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$discriminator",
    version: "1.4.0",
    description: "Returns the user discriminator",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its discriminator",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    output: ArgType.String,
    execute(ctx, [ u ]) {
        return this.success((u ?? ctx.user)?.discriminator)
    },
})