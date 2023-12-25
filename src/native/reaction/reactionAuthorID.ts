import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionAuthorID",
    category: "reaction",
    version: "1.0.0",
    description: "The reaction author id that reacted",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.states?.user?.new?.id)
    },
})
