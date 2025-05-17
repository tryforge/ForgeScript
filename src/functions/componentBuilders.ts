import {
    ActionRowBuilder,
    ButtonBuilder,
    ChannelSelectMenuBuilder,
    ComponentType,
    ContainerBuilder,
    FileBuilder,
    MediaGalleryBuilder,
    MentionableSelectMenuBuilder,
    RoleSelectMenuBuilder,
    SectionBuilder,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    UserSelectMenuBuilder
} from "discord.js"
import { Context } from "../structures"

const MessageComponentBuilders = {
    [ComponentType.Button as ComponentType]: ButtonBuilder,
    [ComponentType.StringSelect as ComponentType]: StringSelectMenuBuilder,
    [ComponentType.UserSelect as ComponentType]: UserSelectMenuBuilder,
    [ComponentType.ChannelSelect as ComponentType]: ChannelSelectMenuBuilder,
    [ComponentType.RoleSelect as ComponentType]: RoleSelectMenuBuilder,
    [ComponentType.MentionableSelect as ComponentType]: MentionableSelectMenuBuilder,
}

const TopLevelComponentBuilders = {
    [ComponentType.ActionRow as ComponentType]: ActionRowBuilder,
    [ComponentType.Container as ComponentType]: ContainerBuilder,
    [ComponentType.TextDisplay as ComponentType]: TextDisplayBuilder,
    [ComponentType.Separator as ComponentType]: SeparatorBuilder,
    [ComponentType.MediaGallery as ComponentType]: MediaGalleryBuilder,
    [ComponentType.Section as ComponentType]: SectionBuilder,
    [ComponentType.File as ComponentType]: FileBuilder,
}

/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to true.
 * @returns 
 */
export function isTopLevel(type: ComponentType, actionRow: boolean = true) {
    return (type in TopLevelComponentBuilders) && (actionRow || type !== ComponentType.ActionRow)
}

/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns 
 */
export function buildActionRow(comp: any) {
    const type = comp?.type as ComponentType
    return new MessageComponentBuilders[type](comp.toJSON?.() ?? comp)
}

/**
 * Builds a top level component.
 * @param ctx The current context.
 * @param comp The component data.
 * @returns 
 */
export function buildComponent(ctx: Context, comp: any) {
    const type = comp?.type as ComponentType
    if (isTopLevel(type, false)) ctx.container.isComponentsV2 = true
    return new TopLevelComponentBuilders[type](comp.toJSON?.() ?? comp)
}

/**
 * Adds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns 
 */
export function addActionRow(ctx: Context) {
    ctx.container.isComponentsV2 = true

    const row = ctx.container.actionRow
    if (!row) return

    const comp = ctx.container.components.at(-1)

    if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container)) 
        comp.addActionRowComponents(row)
    else ctx.container.components.push(row)

    delete ctx.container.actionRow
}