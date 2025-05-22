import { ActionRowBuilder, ButtonBuilder, ChannelSelectMenuBuilder, ComponentType, ContainerBuilder, FileBuilder, MediaGalleryBuilder, MentionableSelectMenuBuilder, RoleSelectMenuBuilder, SectionBuilder, SeparatorBuilder, StringSelectMenuBuilder, TextDisplayBuilder, UserSelectMenuBuilder } from "discord.js";
import { Context } from "../structures";
/**
 * Checks whether the specified component type is a top level component.
 * @param type The component type.
 * @param actionRow Whether to include action rows when checking. Defaults to true.
 * @returns
 */
export declare function isTopLevel(type: ComponentType, actionRow?: boolean): boolean;
/**
 * Builds a message component for action rows.
 * @param comp The component data.
 * @returns
 */
export declare function buildActionRow(comp: any): ButtonBuilder | StringSelectMenuBuilder | UserSelectMenuBuilder | ChannelSelectMenuBuilder | RoleSelectMenuBuilder | MentionableSelectMenuBuilder;
/**
 * Builds a top level component.
 * @param ctx The current context.
 * @param comp The component data.
 * @returns
 */
export declare function buildComponent(ctx: Context, comp: any): ContainerBuilder | FileBuilder | MediaGalleryBuilder | SectionBuilder | SeparatorBuilder | TextDisplayBuilder | ActionRowBuilder<import("@discordjs/builders").AnyComponentBuilder>;
/**
 * Adds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns
 */
export declare function addActionRow(ctx: Context): void;
//# sourceMappingURL=componentBuilders.d.ts.map