"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTopLevel = isTopLevel;
exports.buildActionRow = buildActionRow;
exports.buildComponent = buildComponent;
exports.getLastComponent = getLastComponent;
exports.addActionRow = addActionRow;
const discord_js_1 = require("discord.js");
const MessageComponentBuilders = {
    [discord_js_1.ComponentType.Button]: discord_js_1.ButtonBuilder,
    [discord_js_1.ComponentType.StringSelect]: discord_js_1.StringSelectMenuBuilder,
    [discord_js_1.ComponentType.UserSelect]: discord_js_1.UserSelectMenuBuilder,
    [discord_js_1.ComponentType.ChannelSelect]: discord_js_1.ChannelSelectMenuBuilder,
    [discord_js_1.ComponentType.RoleSelect]: discord_js_1.RoleSelectMenuBuilder,
    [discord_js_1.ComponentType.MentionableSelect]: discord_js_1.MentionableSelectMenuBuilder,
};
const TopLevelComponentBuilders = {
    [discord_js_1.ComponentType.ActionRow]: discord_js_1.ActionRowBuilder,
    [discord_js_1.ComponentType.Container]: discord_js_1.ContainerBuilder,
    [discord_js_1.ComponentType.TextDisplay]: discord_js_1.TextDisplayBuilder,
    [discord_js_1.ComponentType.Separator]: discord_js_1.SeparatorBuilder,
    [discord_js_1.ComponentType.MediaGallery]: discord_js_1.MediaGalleryBuilder,
    [discord_js_1.ComponentType.Section]: discord_js_1.SectionBuilder,
    [discord_js_1.ComponentType.File]: discord_js_1.FileBuilder,
};
/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to `true`.
 * @returns
 */
function isTopLevel(type, actionRow = true) {
    return (type in TopLevelComponentBuilders) && (actionRow || type !== discord_js_1.ComponentType.ActionRow);
}
/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns
 */
function buildActionRow(comp) {
    const type = comp?.type;
    return new MessageComponentBuilders[type](comp.toJSON?.() ?? comp);
}
/**
 * Builds a top level component.
 * @param comp The component data.
 * @param ctx The current context, if any.
 * @returns
 */
function buildComponent(comp, ctx) {
    const type = comp.type;
    if (ctx && isTopLevel(type, false))
        ctx.container.isComponentsV2 = true;
    return new TopLevelComponentBuilders[type](comp.toJSON?.() ?? comp);
}
/**
 * Gets the last component of the current label or action row.
 * @param ctx The current context.
 * @returns
 */
function getLastComponent(ctx) {
    return (ctx.component.label?.data.component ?? ctx.container.actionRow?.components[0]);
}
/**
 * Adds an action row to the components. This is mostly needed inside ComponentsV2 functions.
 * @param ctx The current context.
 * @param cv2 Whether to set the IsComponentsV2 flag. Defaults to `true`.
 * @returns
 */
function addActionRow(ctx, cv2 = true) {
    if (cv2)
        ctx.container.isComponentsV2 = true;
    const row = ctx.container.actionRow;
    if (!row)
        return;
    const comp = ctx.container.components.at(-1);
    if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
        comp.addActionRowComponents(row);
    else
        ctx.container.components.push(row);
    delete ctx.container.actionRow;
}
//# sourceMappingURL=components.js.map