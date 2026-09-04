/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ClientEvents, Interaction } from "discord.js"
import { IExtendedCompilationResult, Compiler, ForgeClient } from "../../core"
import { ForgeError, ErrorType } from "../forge/ForgeError"
import { Context } from ".."

export type CommandType = keyof ClientEvents
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>

export type CommandInteractionTypes =
    | "button"
    | "modal"
    | "slashCommand"
    | "autocomplete"
    | "contextMenu"
    | "userContextMenu"
    | "messageContextMenu"
    | "selectMenu"
    | "userSelectMenu"
    | "roleSelectMenu"
    | "channelSelectMenu"
    | "mentionableSelectMenu"
    | "activityCommand"
    | "messageComponent"

export enum PrefixMode {
    /**
     * The command requires a prefix to be executed. This is the default mode.
     */
    Required,
    /**
     * The command can be executed with or without a prefix.
     */
    Optional,
    /**
     * The command requires no prefix to be executed (unprefixed).
     */
    None,
}

export interface IBaseCommand<T> {
    /**
     * The name for this command. Used as custom ID filter for `interactionCreate` events.
     */
    name?: string

    /**
     * The event type the bot will listen to.
     */
    type: T

    /**
     * The code to run when the event fired.
     */
    code: string

    /**
     * Whether this command can only be executed on guilds.
     * 
     * @default false
     */
    guildOnly?: boolean

    /**
     * The prefix mode to use for this command.
     * 
     * @default PrefixMode.Required
     */
    prefixMode?: PrefixMode

    /**
     * Whether the command can be executed without a prefix.
     * 
     * @deprecated This property is considered legacy, {@link prefixMode} is preferred instead.
     * @default false
     */
    unprefixed?: boolean

    /**
     * The aliases for this command.
     */
    aliases?: string[]

    /**
     * The interaction types to restrict execution of the `interactionCreate` event to.
     */
    allowedInteractionTypes?: CommandInteractionTypes[]

    /**
     * Allows the bot to execute this event triggered by other bots (and itself).
     * 
     * @default false
     */
    allowBots?: boolean

    /**
     * Whether to disable all possible console errors for this command.
     * 
     * @default false
     */
    disableConsoleErrors?: boolean

    /**
     * Whether the command name and aliases should be case-insensitive, this only affects letters.
     * 
     * @default true
     */
    nameCaseInsensitive?: boolean

    /**
     * @private Do not define.
     */
    path?: string

    /**
     * @private Do not define.
     */
    unloadable?: boolean
    [x: PropertyKey]: unknown
}

export interface ICompiledCommand {
    name?: IExtendedCompilationResult
    code: IExtendedCompilationResult
}

let id = 0
export class BaseCommand<T> {
    public readonly compiled: ICompiledCommand
    public readonly id = ++id

    public constructor(public readonly data: IBaseCommand<T>) {
        this.compiled = {
            name: Compiler.compile(data.name, this.data.path),
            code: Compiler.compile(data.code, this.data.path),
        }
    }

    public setPath(p: string) {
        this.data.path = p
        return this
    }

    public validate() {
        if (!this.data.type)
            throw new ForgeError(null, ErrorType.MissingCommandType, this.data.path)
    }

    public static from(code: string) {
        return new this({
            code,
            type: null
        })
    }

    public get name() {
        return this.data.name
    }

    public get type() {
        return this.data.type
    }

    public hasDisabledConsoleErrors(client: ForgeClient) {
        return this.data.disableConsoleErrors || (this.data.disableConsoleErrors === undefined && client.options.disableConsoleErrors)
    }

    public matchesInteractionType(i: Interaction) {
        return (
            !this.data.name ||
            (
                "customId" in i &&
                this.data.name === i.customId
            )
        ) && (
                !this.data.allowedInteractionTypes?.length || (
                    this.data.allowedInteractionTypes.some(
                        type =>
                            (type === "button" && i.isButton()) ||
                            (type === "modal" && i.isModalSubmit()) ||
                            (type === "slashCommand" && i.isChatInputCommand()) ||
                            (type === "autocomplete" && i.isAutocomplete()) ||
                            (type === "selectMenu" && i.isAnySelectMenu()) ||
                            (type === "userSelectMenu" && i.isUserSelectMenu()) ||
                            (type === "roleSelectMenu" && i.isRoleSelectMenu()) ||
                            (type === "channelSelectMenu" && i.isChannelSelectMenu()) ||
                            (type === "mentionableSelectMenu" && i.isMentionableSelectMenu()) ||
                            (type === "contextMenu" && i.isContextMenuCommand()) ||
                            (type === "userContextMenu" && i.isUserContextMenuCommand()) ||
                            (type === "messageContextMenu" && i.isMessageContextMenuCommand()) ||
                            (type === "activityCommand" && i.isPrimaryEntryPointCommand()) ||
                            (type === "messageComponent" && i.isMessageComponent())
                    )
                )
            )
    }
}
