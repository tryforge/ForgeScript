import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$hasEmbeds",
    version: "1.2.0",
    brackets: false,
    description: "Checks whether given message has embeds",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get message from",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "messages" in i
        },
        {
            name: "message ID",
            pointer: 0,
            rest: false,
            required: true,
            type: ArgType.Message,
            description: "The message to check for embeds"
        }
    ],
    execute(ctx, [, msg]) {
        return Return.success(
            !!(msg ?? ctx.message)?.embeds.length
        )
    },
})