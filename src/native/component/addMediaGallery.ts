import { ArgType, NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/componentBuilders"
import { ComponentType, ContainerBuilder, MediaGalleryBuilder } from "discord.js"
import addItem from "./addItem"

export default new NativeFunction({
    name: "$addMediaGallery",
    version: "2.4.0",
    description: "Adds a new media gallery component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "items",
            description: "The items to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        ctx.component.gallery = new MediaGalleryBuilder()

        const items = this.getFunctions(0, addItem)

        for (let i = 0, len = items.length;i < len;i++) {
            const item = items[i]
            const media = await item.execute(ctx)
            if (!this["isValidReturnType"](media)) return media
        }

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addMediaGalleryComponents(ctx.component.gallery)
        else ctx.container.components.push(ctx.component.gallery)

        delete ctx.component.gallery
        return this.success()
    },
})