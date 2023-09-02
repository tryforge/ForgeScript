import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionAuthorID",
    version: "1.0.0",
    description: "The reaction author id that reacted",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.states?.user?.new?.id
        )
    }
})