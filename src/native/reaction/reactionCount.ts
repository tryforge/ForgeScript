import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$reactionCount",
    version: "1.5.0",
    description: "The count of reacted users",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.reaction?.count)
    },
})