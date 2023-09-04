import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createThread",
    version: "1.0.3",
    description: "Creates a thread, returns thread channel id on success",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the thread at",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "threads" in i
        },
        {
            name: "name",
            description: "The name for the thread",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "content",
            description: "The content to use for the starter message",
            rest: false,
            type: ArgType.String
        },
        {
            name: "message ID",
            description: "The message to start thread for",
            rest: false,
            pointer: 0,
            type: ArgType.Message
        },
    ],
    async execute(ctx, [ channel, name, content, msg ]) {
        const ch = channel as TextChannel

        ctx.container.content = content || undefined
        const success = await ch.threads.create({
            name,
            startMessage: ctx.container.getOptions()
        }).catch(noop)

        ctx.container.reset()

        return Return.success(success ? success.id : undefined)
    },
})