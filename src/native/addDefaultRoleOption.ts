import { BaseSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultRoleOption",
    version: "1.4ºº.0",
    description: "Adds a default role option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "role ID",
            description: "The role id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof BaseSelectMenuBuilder) {
            if (menu instanceof RoleSelectMenuBuilder)
                menu.addDefaultRoles(id)
            else if (menu instanceof MentionableSelectMenuBuilder)
                menu.addDefaultRoles(id)
        }

        return this.success()
    },
})