import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$userTag",
    version: "1.4.0",
    description: "Returns the user tag",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to get its tag",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    output: ArgType.String,
    execute(ctx, [ u ]) {
        return this.success((u ?? ctx.user)?.tag)
    },
})