import { ComponentInContainer, ContainerComponent, MessageActionRowComponent, ThumbnailComponent } from "discord.js";
export declare enum ComponentProperty {
    id = "id",
    type = "type",
    customID = "customID",
    label = "label",
    style = "style",
    url = "url",
    disabled = "disabled",
    maxValues = "maxValues",
    minValues = "minValues",
    optionCount = "optionCount",
    options = "options",
    optionNames = "optionNames",
    emoji = "emoji",
    optionDescriptions = "optionDescriptions",
    optionValues = "optionValues",
    content = "content",
    accentColor = "accentColor",
    spoiler = "spoiler",
    divider = "divider",
    spacing = "spacing",
    items = "items",
    itemUrls = "itemUrls",
    fileUrl = "fileUrl",
    accessory = "accessory",
    components = "components",
    thumbnailUrl = "thumbnailUrl"
}
export declare const ComponentProperties: import("..").Properties<typeof ComponentProperty, ContainerComponent | MessageActionRowComponent | ThumbnailComponent | ComponentInContainer>;
//# sourceMappingURL=component.d.ts.map