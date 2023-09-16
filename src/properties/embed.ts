import { EmbedBuilder } from "@discordjs/builders"
import defineProperties from "../functions/defineProperties"

export enum EmbedProperty {
    title = "title",
    authorName = "authorName",
    authorIcon = "authorIcon",
    footerText = "footerText",
    image = "image",
    thumbnail = "thumbnail",
    footerIcon = "footerIcon",
    description = "description",
    timestamp = "timestamp",
}

export const EmbedProperties = defineProperties<typeof EmbedProperty, EmbedBuilder>({
    authorIcon: (i) => i?.data.author?.icon_url,
    authorName: (i) => i?.data.author?.name,
    description: (i) => i?.data.description,
    footerIcon: (i) => i?.data.footer?.icon_url,
    footerText: (i) => i?.data.footer?.text,
    image: (i) => i?.data.image?.url,
    thumbnail: (i) => i?.data.image?.url,
    timestamp: (i) => i?.data.timestamp,
    title: (i) => i?.data.title,
})
