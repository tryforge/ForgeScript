import { APISelectMenuOption, BaseSelectMenuBuilder, parseEmoji } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addOption",
    version: "1.0.0",
    description: "Adds a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description for this option",
            rest: false,
            type: ArgType.String,
            required: false,
        },
        {
            name: "value",
            description: "The value to use for this option",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "emoji",
            description: "The emoji to use for this option",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "default",
            description: "Whether to set this option as default",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [name, desc, value, emoji, def]) {
        const menu = ctx.container.actionRow?.components[0]

        const data: APISelectMenuOption = {
            label: name,
            description: desc || undefined,
            value,
            default: def || false,
            emoji: emoji
                ? (parseEmoji(emoji) as APISelectMenuOption["emoji"]) ?? {
                    name: emoji,
                }
                : undefined,
        }

        if (menu instanceof BaseSelectMenuBuilder && "addOptions" in menu) {
            menu.addOptions(data)
        }

        return this.success()
    },
})