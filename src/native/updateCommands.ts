import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$updateCommands",
    category: "unknown",
    version: "1.0.2",
    description: "Updates bot commands, also registers new ones",
    unwrap: false,
    execute(ctx) {
        ctx.client.commands.refresh()
        return this.success()
    },
})
