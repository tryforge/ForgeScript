/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import {
    AutoModerationRule,
    Channel,
    Entitlement,
    Guild,
    GuildAuditLogsEntry,
    GuildBan,
    GuildEmoji,
    GuildMember,
    GuildScheduledEvent,
    Invite,
    Message,
    PartialMessage,
    PartialPollAnswer,
    PartialSoundboardSound,
    PollAnswer,
    Presence,
    Role,
    SoundboardSound,
    StageInstance,
    Sticker,
    Subscription,
    User,
    VoiceChannelEffect,
    VoiceServerUpdateData,
    VoiceState
} from "discord.js"
import { IExtendedCompilationResult } from "."
import { Sendable, BaseCommand, Context, Logger, Container, Return, ILocalFunctionData } from "../structures"
import { ForgeClient } from "./ForgeClient"

export interface IStates {
    message: Message
    voiceState: VoiceState
    voiceServer: VoiceServerUpdateData
    voiceEffect: VoiceChannelEffect
    presence: Presence
    role: Role
    member: GuildMember
    emoji: GuildEmoji
    user: User
    audit: GuildAuditLogsEntry
    channel: Channel
    guild: Guild
    poll: PollAnswer | PartialPollAnswer
    entitlement: Entitlement
    ban: GuildBan
    scheduledEvent: GuildScheduledEvent
    bulk: Array<Message | PartialMessage>
    stage: StageInstance
    invite: Invite
    sticker: Sticker
    automodRule: AutoModerationRule
    soundboardSound: SoundboardSound | PartialSoundboardSound
    subscription: Subscription
}

export type States = {
    [K in keyof IStates]?: {
        old?: IStates[K] | null
        new?: IStates[K] | null
    }
}

export interface IRunnable {
    /**
     * The available discord client
     */
    client: ForgeClient

    /**
     * The compiled data to execute
     */
    data: IExtendedCompilationResult

    allowTopLevelReturn?: boolean

    /**
     * The context this code will run in
     */
    obj: Sendable
    
    /**
     * The command used for this execution
     */
    command: BaseCommand<unknown> | null
    
    /**
     * Whether to suppress sending the response to discord.
     */
    doNotSend?: boolean

    /**
     * Removes errors output to console
     */
    disableConsoleErrors?: boolean

    /**
     * Extras data
     */
    extras?: unknown

    /**
     * Whether to suppress errors from being sent to discord, and be sent to console instead
     */
    redirectErrorsToConsole?: boolean

    /**
     * The old and new states of an event
     */
    states?: States

    /**
     * The already existing variables defined with $let
     */
    keywords?: Record<string, unknown>

    /**
     * The already existing env variables
     */
    environment?: Record<string, unknown>

    /**
     * The already existing local functions
     */
    localFunctions?: Record<string, ILocalFunctionData>

    /**
     * The args used in the message command
     */
    args?: string[]

    /**
     * The container reference to use
     */
    container?: Container
}

export class Interpreter {
    public static async run(ctx: Context): Promise<string | null>
    public static async run(runtime: IRunnable): Promise<string | null>
    public static async run(raw: Context | IRunnable): Promise<string | null> {
        const ctx = raw instanceof Context ? raw : new Context(raw)
        const runtime = ctx.runtime

        if (runtime.client !== null) {
            if (runtime.command && !ctx.client.canRespondToBots(runtime.command) && ctx.user?.bot) return null

            if (runtime.command?.data.guildOnly && !ctx.guild) return null
            else if (runtime.client.options.restrictions !== undefined) {
                const { guildIDs, userIDs } = runtime.client.options.restrictions
                const guildID = ctx.guild?.id
                const authorID = ctx.user?.id
    
                if (userIDs?.length && authorID && !userIDs.includes(authorID)) return null
                else if (guildIDs?.length && guildID && !guildIDs.includes(guildID)) return null
            }
        }

        const args = new Array<unknown>(runtime.data.functions.length)
        let content: string

        if (ctx.runtime.data.functions.length === 0) {
            content = ctx.runtime.data.code
        } else {
            ctx.executionTimestamp = performance.now()

            try {
                for (let i = 0, len = runtime.data.functions.length; i < len; i++) {
                    const fn = runtime.data.functions[i]
                    const rt = await fn.execute(ctx)
                    args[i] = (!rt.success && !ctx.handleNotSuccess(fn, rt)) ? ctx["error"]() : rt.value
                }
            } catch (err: unknown) {
                if (err instanceof Error)
                    Logger.error(err)
                else if (err instanceof Return) {
                    if (err.return)
                        return err.value as string
                }

                return null
            }            
            
            content = runtime.data.resolve(args)
        }

        if (!runtime.doNotSend) {
            ctx.container.content = content
            await ctx.container.send(runtime.obj)
        }

        return content
    }
}
