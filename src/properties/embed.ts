import { EmbedBuilder } from "@discordjs/builders"
import defineProperties from "../functions/defineProperties"

export enum EmbedProperty {
    title = "title",
    titleURL = "titleURL",
    authorName = "authorName",
    authorIcon = "authorIcon",
    footerText = "footerText",
    image = "image",
    thumbnail = "thumbnail",
    footerIcon = "footerIcon",
    description = "description",
    timestamp = "timestamp",
    authorURL = "authorURL",
    color = "color",
    fieldName = "fieldName",
    fieldInline = "fieldInline",
    fieldValue = "fieldValue"
}

export const EmbedProperties = defineProperties<typeof EmbedProperty, EmbedBuilder>({
    authorIcon: (i) => i?.data.author?.icon_url,
    authorURL: i => i?.data.author?.url,
    titleURL: i => i?.data.url,
    fieldName: (i, _, index) => i?.data.fields?.[index!].name,
    fieldValue: (i, _, index) => i?.data.fields?.[index!].value,
    fieldInline: (i, _, index) => i?.data.fields?.[index!].inline,
    color: i => i?.data.color,
    authorName: (i) => i?.data.author?.name,
    description: (i) => i?.data.description,
    footerIcon: (i) => i?.data.footer?.icon_url,
    footerText: (i) => i?.data.footer?.text,
    image: (i) => i?.data.image?.url,
    thumbnail: (i) => i?.data.thumbnail?.url,
    timestamp: (i) => i?.data.timestamp,
    title: (i) => i?.data.title,
})
