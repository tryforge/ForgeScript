import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isCommand",
    version: "1.0.6",
    description: "Whether the interaction is a command",
    unwrap: false,
    execute(ctx) {
        return Return.success(Boolean(ctx.isCommand()))
    },
})