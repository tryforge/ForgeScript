import { ActionRowBuilder, ComponentType, ContainerBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        const row = ctx.container.actionRow
        const comp = ctx.container.components.at(-1)

        if (row) {
            if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
                comp.addActionRowComponents(row)
            else ctx.container.components.push(row)
        }

        ctx.container.actionRow = new ActionRowBuilder()
        return this.success()
    },
})