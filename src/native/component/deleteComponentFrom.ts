import { ActionRow, ActionRowBuilder, ButtonBuilder, MessageActionRowComponent } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteComponentFrom",
    version: "1.5.0",
    description: "Deletes a component with given custom id from a message",
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
            description: "The message to remove component from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The component's custom id to delete",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    unwrap: true,
    async execute(ctx, [, m, id]) {
        const components = m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>))

        for (let i = 0, len = components.length; i < len; i++) {
            const comp = components[i]
            const index = comp.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === id)
            if (index !== -1) {
                if (comp.components.length === 1) components.splice(i, 1)
                else comp.components.splice(index, 1)
                break
            }
        }

        return this.success(
            !!(await m.edit({ components: components as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})
