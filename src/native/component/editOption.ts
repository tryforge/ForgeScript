import { ActionRowBuilder, ContainerBuilder, StringSelectMenuBuilder, parseEmoji } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editOption",
    version: "1.4.0",
    description: "Edits a select menu option",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The option name",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "new name",
            description: "The new option name",
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
    execute(ctx, [old, name, desc, value, emoji, def]) {
        for (let i = 0, len = ctx.container.components.length;i < len;i++) {
            const comp = ctx.container.components[i]
            if (comp instanceof ActionRowBuilder || comp instanceof ContainerBuilder) {
                const menu = comp.components[0]
                if (menu instanceof StringSelectMenuBuilder) {
                    const index = menu.options.findIndex(x => x.data.label === old)
                    if (index !== -1) {
                        const option = menu.options[index]
                        option.setLabel(name)
                        
                        if (value) option.setValue(value)
                        if (emoji) option.setEmoji(parseEmoji(emoji)!)
                        if (desc) option.setDescription(desc)
                        if (def) option.setDefault(def)
                        
                        break
                    }
                }
            }
        }

        return this.success()
    },
})