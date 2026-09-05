/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import {
    ButtonStyle,
    ComponentInContainer,
    ComponentType,
    ContainerComponent,
    MessageActionRowComponent,
    SeparatorSpacingSize,
    ThumbnailComponent,
} from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum ComponentProperty {
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
    thumbnailUrl = "thumbnailUrl",
}

export const ComponentProperties = defineProperties<typeof ComponentProperty, MessageActionRowComponent | ComponentInContainer | ContainerComponent | ThumbnailComponent>({
    id: (i) => i?.id,
    type: (i) => ComponentType[i?.type!],
    customID: (i) => (i && "customId" in i ? i.customId : null),
    emoji: (i) =>
        i && "emoji" in i
            ? i.emoji?.id
                ? `<${i.emoji?.animated ? "a" : ""}:${i.emoji?.name}:${i.emoji?.id}>`
                : i.emoji?.name
            : null,
    label: (i) => (i && "label" in i ? i.label : null),
    style: (i) => (i && "style" in i ? ButtonStyle[i.style] : null),
    disabled: (i) => (i && "disabled" in i ? i.disabled : null),
    url: (i) => (i && "url" in i ? i.url : null),
    maxValues: (i) => (i && "maxValues" in i ? i.maxValues : null),
    minValues: (i) => (i && "minValues" in i ? i.minValues : null),
    optionCount: (i) => (i && "options" in i ? i.options.length : null),
    optionNames: (i, sep) => (i && "options" in i ? i.options.map((x) => x.label).join(sep ?? ", ") : null),
    optionDescriptions: (i, sep) =>
        i && "options" in i ? i.options.map((x) => x.description).join(sep ?? ", ") : null,
    optionValues: (i, sep) => (i && "options" in i ? i.options.map((x) => x.value).join(sep ?? ", ") : null),
    options: (i) => (i && "options" in i ? JSON.stringify(i.options, undefined, 4) : null),
    content: (i) => (i && "content" in i ? i.content : null),
    accentColor: (i) => (i && "hexAccentColor" in i ? i.hexAccentColor : null),
    spoiler: (i) => (i && "spoiler" in i ? i.spoiler : null),
    divider: (i) => (i && "divider" in i ? i.divider : null),
    spacing: (i) => (i && "spacing" in i ? SeparatorSpacingSize[i.spacing] : null),
    items: (i) => (i && "items" in i ? JSON.stringify(i.items, undefined, 4) : null),
    itemUrls: (i, sep) => (i && "items" in i ? i.items.map((x) => x.media.url).join(sep ?? ", ") : null),
    fileUrl: (i) => (i && "file" in i ? i.file.url : null),
    accessory: (i) => (i && "accessory" in i ? JSON.stringify(i.accessory, undefined, 4) : null),
    components: (i) => (i && "components" in i ? JSON.stringify(i.components, undefined, 4) : null),
    thumbnailUrl: (i) => (i instanceof ThumbnailComponent ? i.media.url : null),
})