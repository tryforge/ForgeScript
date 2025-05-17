import { ArgType, NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/componentBuilders"
import { ComponentType, ContainerBuilder, SectionBuilder } from "discord.js"
import addButton from "./addButton"
import addTextDisplay from "./addTextDisplay"
import addThumbnail from "./addThumbnail"

export default new NativeFunction({
    name: "$addSection",
    version: "2.4.0",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessory to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        ctx.component.section = new SectionBuilder()
        ctx.container.inside.push(ComponentType.Section)

        const textDisplays = this.getFunctions(0, addTextDisplay)
        const newButton = this.getFunction(0, addButton)
        const newThumbnail = this.getFunction(0, addThumbnail)

        for (let i = 0, len = textDisplays.length;i < len;i++) {
            const textDisplay = textDisplays[i]
            const text = await textDisplay.execute(ctx)
            if (!this["isValidReturnType"](text)) return text
        }

        if (newButton) {
            const button = await newButton.execute(ctx)
            if (!this["isValidReturnType"](button)) return button
        }

        if (newThumbnail) {
            const thumbnail = await newThumbnail.execute(ctx)
            if (!this["isValidReturnType"](thumbnail)) return thumbnail
        }

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addSectionComponents(ctx.component.section)
        else ctx.container.components.push(ctx.component.section)

        delete ctx.component.section
        ctx.container.inside.pop()
        return this.success()
    },
})