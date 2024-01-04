import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isContextMenu",
    version: "1.0.6",
    description: "Whether the interaction is a context menu",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.isContextCommand()))
    },
})
