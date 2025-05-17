import { buildComponent } from "../../functions/componentBuilders"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$fetchComponents",
    version: "1.0.0",
    description: "Fetches a message's components, this will override any other component added to the response",
    aliases: ["$fetchRows"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to get the components from",
            pointer: 0,
            rest: false,
            type: ArgType.Message,
            required: true,
        },
    ],
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => buildComponent(ctx, x)) ?? []
        return this.success()
    },
})