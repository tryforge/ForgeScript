import { ComponentType, ContainerBuilder, TextDisplayBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/componentBuilders"

export default new NativeFunction({
    name: "$addTextDisplay",
    version: "2.4.0",
    description: "Adds a new text display component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "content",
            description: "The content of this text display",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [content]) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        const text = new TextDisplayBuilder().setContent(content)

        if (ctx.container.isInside(ComponentType.Section)) ctx.component.section?.addTextDisplayComponents(text)
        else if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container)) 
            comp.addTextDisplayComponents(text)
        else ctx.container.components.push(text)

        return this.success()
    },
})