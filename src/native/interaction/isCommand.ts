import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isCommand",
    version: "1.0.6",
    description: "Returns whether the interaction is a command",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.isCommand()))
    },
})
