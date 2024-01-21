import {
    AnyComponent,
    ButtonStyle,
    Channel,
    ChannelType,
    Collection,
    ComponentType,
    GuildMember,
    MessageActionRowComponent,
} from "discord.js"
import defineProperties from "../functions/defineProperties"
import { IStates } from "../core"

export enum ComponentProperty {
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
    optionDescriptions = "optionDescriptions",
    optionValues = "optionValues",
}

export const ComponentProperties = defineProperties<typeof ComponentProperty, MessageActionRowComponent>({
    type: (i) => ComponentType[i?.type!],
    customID: (i) => (i && "customId" in i ? i.customId : null),
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
})
