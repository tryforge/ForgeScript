import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isSlashCommand",
    version: "1.4.0",
    description: "Whether the interaction is a slash command",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isChatInputCommand))
    },
})
