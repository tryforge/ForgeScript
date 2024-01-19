import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$interactionUpdate",
    version: "1.0.3",
    description: "Forces an interaction update",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this response",
            required: true,
            type: ArgType.String,
            rest: false,
        },
    ],
    async execute(ctx, [content]) {
        ctx.container.content = content || undefined
        ctx.container.update = true

        if (!this.hasFields) {
            await ctx.container.send(ctx.obj)
            return this.success()
        }

        await ctx.container.send<Message<true>>(ctx.obj)

        return this.success()
    },
})
