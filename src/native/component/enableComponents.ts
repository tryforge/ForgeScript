import { ActionRowBuilder, MessageActionRowComponentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$enableComponents",
    version: "2.2.0",
    description: "Enables all components on the current message",
    aliases: ["$enableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components as ActionRowBuilder<MessageActionRowComponentBuilder>[]

        components.forEach(row => {
            const actionRow = new ActionRowBuilder()
            row?.components.forEach(component => actionRow.addComponents(component.setDisabled(false)))
        })

        return this.success()
    },
})