import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionAuthorID",
    version: "1.0.0",
    description: "Returns the reaction author id that reacted",
    unwrap: true,
    output: ArgType.User,
    execute(ctx) {
        return this.success(ctx.states?.user?.new?.id)
    },
})
