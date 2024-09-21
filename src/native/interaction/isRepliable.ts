import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isRepliable",
    version: "1.5.0",
    description: "Returns whether this interaction can be replied to",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isRepliable()))
    },
})