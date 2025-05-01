import { MediaGalleryItemBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addItem",
    version: "2.4.0",
    description: "Adds a new media gallery item",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url for the media item",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The description of the media item",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [url, desc, spoiler]) {
        const item = new MediaGalleryItemBuilder().setURL(url).setSpoiler(!!spoiler)

        if (desc) item.setDescription(desc)
        ctx.component.gallery?.addItems(item)

        return this.success()
    },
})