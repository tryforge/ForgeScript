import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"

export default new NativeFunction({
    name: "$createThread",
    version: "1.0.3",
    description: "Creates a thread, returns thread channel id on success",
    unwrap: true,
    output: ArgType.Channel,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the thread at",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "threads" in i,
        },
        {
            name: "name",
            description: "The name for the thread",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "message ID",
            description: "The message to start thread for",
            rest: false,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    async execute(ctx, [channel, name, m]) {
        const ch = channel as TextChannel

        const success = await ch.threads
            .create({
                name,
                startMessage: m ?? undefined,
            })
            .catch(ctx.noop)

        return this.success(success ? success.id : undefined)
    },
})
