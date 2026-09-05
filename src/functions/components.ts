/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import {
    ActionRowBuilder,
    ButtonBuilder,
    ChannelSelectMenuBuilder,
    CheckboxBuilder,
    CheckboxGroupBuilder,
    ComponentType,
    ContainerBuilder,
    FileBuilder,
    FileUploadBuilder,
    MediaGalleryBuilder,
    MentionableSelectMenuBuilder,
    MessageActionRowComponentBuilder,
    RadioGroupBuilder,
    RoleSelectMenuBuilder,
    SectionBuilder,
    SeparatorBuilder,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    TextInputBuilder,
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
 * @param actionRow Whether to include action rows when checking. Defaults to `true`.
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
 * @param comp The component data.
 * @param ctx The current context, if any.
 * @returns 
 */
export function buildComponent(comp: any, ctx?: Context) {
    const type = comp.type as ComponentType
    if (ctx && isTopLevel(type, false)) ctx.container.isComponentsV2 = true
    return new TopLevelComponentBuilders[type](comp.toJSON?.() ?? comp)
}

/**
 * Gets the last component of the current label or action row.
 * @param ctx The current context.
 * @returns 
 */
export function getLastComponent(ctx: Context): MessageActionRowComponentBuilder | TextInputBuilder | CheckboxBuilder | CheckboxGroupBuilder | FileUploadBuilder | RadioGroupBuilder | undefined {
    return (ctx.component.label?.data.component ?? ctx.container.actionRow?.components[0])
}

/**
 * Adds an action row to the components. This is mostly needed inside ComponentsV2 functions.
 * @param ctx The current context.
 * @param cv2 Whether to set the IsComponentsV2 flag. Defaults to `true`.
 * @returns 
 */
export function addActionRow(ctx: Context, cv2: boolean = true) {
    if (cv2) ctx.container.isComponentsV2 = true

    const row = ctx.container.actionRow
    if (!row) return

    const comp = ctx.container.components.at(-1)

    if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
        comp.addActionRowComponents(row)
    else ctx.container.components.push(row)

    delete ctx.container.actionRow
}