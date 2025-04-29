import { ButtonBuilder, ActionRowBuilder, ActionRow, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableButtonsOf",
    version: "2.2.0",
    description: "Disables all buttons of a message, returns bool",
    aliases: ["$disableAllButtonsOf"],
    unwrap: true,
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
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    output: ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))

        for (let i = 0, len = components.length; i < len; i++) {
            if (Number.isFinite(index) && i !== index) continue
            const actionRow = new ActionRowBuilder()

            components[i]?.components.forEach(comp => {
                if (comp instanceof ButtonBuilder) {
                    actionRow.addComponents(comp.setDisabled(true))
                } else {
                    actionRow.addComponents(comp)
                }
            })
            if (i === index) break
        }

        return this.success(!!(await msg.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop)))
    },
})