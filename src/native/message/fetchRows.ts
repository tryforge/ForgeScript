import { ActionRow, ActionRowBuilder, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

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
            type: ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: ArgType.Message,
            required: true,
        },
    ],
    brackets: false,
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>)) ?? []
        return this.success()
    },
})
