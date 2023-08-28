import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ephemeral",
    description: "Marks this reply as ephemeral",
    unwrap: false,
    execute(ctx) {
        ctx.container.ephemeral = true
        return Return.success()
    },
})