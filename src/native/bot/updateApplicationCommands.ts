import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$updateApplicationCommands",
    version: "1.2.0",
    description: "Updates application commands, also registers new ones",
    unwrap: false,
    async execute(ctx) {
        ctx.client.applicationCommands.load()
        await ctx.client.applicationCommands.registerGlobal()
        return this.success()
    },
})
