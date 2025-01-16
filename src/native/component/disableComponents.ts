import { ActionRowBuilder, MessageActionRowComponentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$disableComponents",
    version: "2.2.0",
    description: "Disables all components on the current message",
    aliases: ["$disableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components as ActionRowBuilder<MessageActionRowComponentBuilder>[]

        components.forEach(row => {
            const actionRow = new ActionRowBuilder()
            row?.components.forEach(component => actionRow.addComponents(component.setDisabled(true)))
        })

        return this.success()
    },
})