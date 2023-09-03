import { ActionRowBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$fetchRows",
    version: "1.0.0",
    description: "Fetch a message's components, this will override any other component added to the response",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get the message from",
            rest: false,
            required: true,
            type: ArgType.Channel
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: ArgType.Message,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [, msg ]) {
        ctx.container.components = msg.components.map(x => ActionRowBuilder.from(x))
        return Return.success()
    },
})