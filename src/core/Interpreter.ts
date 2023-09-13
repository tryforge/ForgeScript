import { inspect } from "util"
import { Sendable } from "../structures/Container"
import { Context } from "../structures/Context"
import { ReturnType } from "../structures/Return"
import { IExtendedCompilationResult } from "./Compiler"
import { ForgeClient } from "./ForgeClient"
import { Channel, Guild, GuildAuditLogsEntry, GuildEmoji, GuildMember, Invite, Message, Role, User, VoiceState } from "discord.js"
import { BaseCommand } from "../structures"

export interface IStates {
    message: Message
    voiceState: VoiceState
    role: Role
    member: GuildMember
    emoji: GuildEmoji
    user: User
    audit: GuildAuditLogsEntry
    channel: Channel
    guild: Guild
    invite: Invite
}

export type States = {
    [K in keyof IStates]?: {
        old?: IStates[K] | null
        new?: IStates[K] | null
    }
}

export interface IRunnable {
    client: ForgeClient
    data: IExtendedCompilationResult
    obj: Sendable
    command: BaseCommand<unknown> | null
    doNotSend?: boolean
    extras?: unknown
    states?: States
    args?: string[]
}

export class Interpreter {
    public static async run(runtime: IRunnable): Promise<string | null> {
        const ctx = new Context(runtime)
        
        if (runtime.command?.data.guildOnly && !ctx.guild) return null
        else if (runtime.client.options.restrictions !== undefined) {
            const { guildIDs, userIDs } = runtime.client.options.restrictions
            const guildID = ctx.guild?.id
            const authorID = ctx.user?.id

            if (userIDs?.length && (authorID && !userIDs.includes(authorID))) return null
            else if (guildIDs?.length && (guildID && !guildIDs.includes(guildID))) return null
        }

        const args = new Array<unknown>(runtime.data.functions.length)
        
        ctx.executionTimestamp = Date.now()
        
        for (let i = 0, len = runtime.data.functions.length;i < len;i++) {
            const fn = runtime.data.functions[i]
            const rt = await fn.execute(ctx)

            if (!rt.success && !ctx.handleNotSuccess(rt)) return null

            args[i] = rt.value
        }

        const content = runtime.data.resolve(args)
        if (!runtime.doNotSend) {
            ctx.container.content = content
            await ctx.container.send(runtime.obj)
        }

        return content
    }
}