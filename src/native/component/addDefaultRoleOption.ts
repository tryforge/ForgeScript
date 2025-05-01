import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addDefaultRoleOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultRoles",
        "$addDefaultRoleOptions"
    ],
    description: "Adds default role options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "role IDs",
            description: "The role ids",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ ids ]) {
        const menu = ctx.container.actionRow?.components[0]
        if (menu instanceof RoleSelectMenuBuilder || menu instanceof MentionableSelectMenuBuilder) {
            menu.addDefaultRoles(ids)
        }
        return this.success()
    },
})