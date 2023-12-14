import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$updateApplicationCommands",
    version: "1.2.0",
    description: "Updates application commands commands",
    unwrap: false,
    execute(ctx) {
        ctx.client.applicationCommands.load()
        return this.success()
    },
})