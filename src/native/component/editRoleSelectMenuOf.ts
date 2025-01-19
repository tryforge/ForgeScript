import { ActionRowBuilder, ButtonBuilder, RoleSelectMenuBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editRoleSelectMenuOf",
    version: "2.2.0",
    description: "Edits a role select menu of a message, returns bool",
    unwrap: true,
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
            description: "The message to edit select menu for",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "old custom ID",
            description: "The custom id of the menu to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new custom ID",
            description: "The new custom id to use for this menu",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "placeholder",
            description: "The placeholder to use for the menu",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "disabled",
            description: "Whether to keep this menu disabled",
            type: ArgType.Boolean,
            rest: false,
        },
        {
            name: "min values",
            description: "The min values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values to choose for the menu",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "default roles",
            rest: true,
            type: ArgType.String,
            description: "The default selected roles of the menu"
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, m, old, id, placeholder, disabled, min, max, roles]) {
        const components = m.components.map(x => ActionRowBuilder.from(x))

        for (let i = 0, len = components.length;i < len;i++) {
            const comp = components[i]
            const menu = comp.components[0]
            if (menu instanceof RoleSelectMenuBuilder && menu.data.custom_id === old) {
                menu.setCustomId(id)
                
                if (placeholder) menu.setPlaceholder(placeholder)
                if (typeof disabled === "boolean") menu.setDisabled(disabled)
                if (typeof min === "number") menu.setMinValues(min)
                if (typeof max === "number") menu.setMaxValues(max)
                if (roles.length) menu.setDefaultRoles(roles.filter(x => x))

                break
            }
        }

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})