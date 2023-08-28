import { ActionRowBuilder } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addActionRow",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        ctx.container.components.push(new ActionRowBuilder())
        return Return.success()
    }
})