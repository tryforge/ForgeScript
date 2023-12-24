import { BaseSelectMenuBuilder, UserSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MentionableSelectMenuBuilder, RoleSelectMenuBuilder } from "@discordjs/builders"

export default new NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4ºº.0",
    description: "Adds a default user option to the last select menu",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id ]) {
        const menu = ctx.container.components.at(-1)
        if (menu instanceof BaseSelectMenuBuilder) {
            if (menu instanceof UserSelectMenuBuilder)
                menu.addDefaultUsers(id)
            else if (menu instanceof MentionableSelectMenuBuilder)
                menu.addDefaultUsers(id)
        }

        return this.success()
    },
})