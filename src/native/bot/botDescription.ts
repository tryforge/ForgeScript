import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botDescription",
    version: "1.5.0",
    aliases: ["$clientDescription"],
    description: "Returns the description of the bot",
    unwrap: true,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.application.description)
    },
})