import { ActionRowBuilder } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        const row = ctx.container.actionRow
        if (row) ctx.container.components.push(row)
        ctx.container.actionRow = new ActionRowBuilder()
        return this.success()
    },
})