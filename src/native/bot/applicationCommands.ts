import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$applicationCommands",
    version: "1.5.0",
    description: "Returns all application commands of your app",
    output: ArgType.Json,
    unwrap: false,
    async execute(ctx) {
        const commands = await ctx.client.application.commands.fetch().catch(ctx.noop)

        return this.successJSON(commands)
    },
})