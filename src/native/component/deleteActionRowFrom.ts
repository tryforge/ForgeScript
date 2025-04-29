import { ActionRow, ActionRowBuilder, ButtonBuilder, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { noop } from "lodash"

export default new NativeFunction({
    name: "$deleteActionRowFrom",
    version: "1.5.0",
    description: "Deletes an action row at given index",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to remove row from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
    ],
    output: ArgType.Boolean,
    unwrap: true,
    async execute(ctx, [, m, index]) {
        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))
        components.splice(index, 1)
        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(noop))
        )
    },
})
