import {
    ApplicationEmoji,
    AttachmentBuilder,
    AutoModerationRule,
    BaseChannel,
    Emoji,
    Guild,
    GuildEmoji,
    GuildForumTag,
    GuildMember,
    GuildScheduledEvent,
    Invite,
    Message,
    MessageReaction,
    PermissionsString,
    Role,
    SoundboardSound,
    StageInstance,
    Sticker,
    TextBasedChannel,
    User,
    Webhook,
} from "discord.js"
import { CompiledFunction } from "./CompiledFunction"
import { Context } from "./Context"
import { Return } from "./Return"

export type EnumLike<T = any> = {
    [id: string]: T | string
    [nu: number]: string
}

export type GetEnum<T> = T extends EnumLike<infer P> ? P : never

export enum ArgType {
    URL,
    String,
    BigInt,
    Unknown,
    TextChannel,
    OverwritePermission,
    Number,
    User,
    Date,
    Guild,
    RoleOrUser,
    Invite,
    Permission,
    Json,
    Color,
    Enum,
    ForumTag,
    Emoji,
    GuildEmoji,
    Boolean,
    Attachment,
    Reaction,
    Message,
    Channel,
    Role,
    Webhook,
    Sticker,
    Time,
    Member,
    ApplicationEmoji,
    AutomodRule,
    ScheduledEvent,
    StageInstance,
    SoundboardSound
}

export interface IArg<
    Type extends ArgType = ArgType,
    Required extends boolean = boolean,
    Rest extends boolean = boolean,
    Enum extends EnumLike = EnumLike
> {
    name: string
    description: string
    type: Type
    enum?: Enum

    /**
     * Arg index to look at when a type requires a previously guild arg or depends on something.
     */
    pointer?: number
    pointerProperty?: string

    condition?: boolean
    delimiter?: string
    check?: (i: GetArgType<Type, Enum>) => boolean

    /**
     * Defaults to false
     */
    required?: Required

    /**
     * Whether this argument is an array of values
     */
    rest: Rest
}

export type NativeFunctionExecutor<T extends [...IArg[]], Unwrap extends boolean = boolean> = Unwrap extends true
    ? (this: CompiledFunction<T, Unwrap>, ctx: Context, args: UnwrapArgs<T>) => Promise<Return> | Return
    : (this: CompiledFunction<T, Unwrap>, ctx: Context) => Promise<Return> | Return

export interface INativeFunction<T extends [...IArg[]], Unwrap extends boolean = boolean> {
    name: `$${string}`
    description: string
    examples?: string[]
    experimental?: boolean
    deprecated?: boolean

    /**
     * Resolves all arguments and are passed through execute params.
     */
    unwrap: Unwrap
    args?: [...T]
    output?: ArgType | EnumLike | (ArgType | EnumLike)[]

    /**
     * Do not provide this.
     */
    version?: string

    /**
     * Aliases this function has
     */
    aliases?: `$${string}`[]

    /**
     * If undefined, function has no brackets
     *
     * If false, function can have brackets.
     *
     * If true, function must have brackets.
     */
    brackets?: boolean
    execute: NativeFunctionExecutor<T, Unwrap>
}

export type OverwritePermission = {
    permission: PermissionsString
    value: null | boolean
}

export type MarkRest<T, B extends boolean> = B extends true ? T[] : T
export type GetArgType<T extends ArgType, Enum extends EnumLike> = T extends ArgType.Number
    ? number
    : T extends ArgType.String
    ? string
    : T extends ArgType.User
    ? User
    : T extends ArgType.URL
    ? string
    : T extends ArgType.Json
    ? Record<string, unknown>
    : T extends ArgType.RoleOrUser
    ? Role | User
    : T extends ArgType.Guild
    ? Guild
    : T extends ArgType.Color 
    ? number 
    : T extends ArgType.Role
    ? Role
    : T extends ArgType.TextChannel
    ? TextBasedChannel
    : T extends ArgType.Attachment
    ? AttachmentBuilder
    : T extends ArgType.BigInt
    ? bigint
    : T extends ArgType.Unknown 
    ? unknown
    : T extends ArgType.Boolean
    ? boolean
    : T extends ArgType.Date
    ? Date 
    : T extends ArgType.Enum
    ? GetEnum<Enum>
    : T extends ArgType.Channel
    ? BaseChannel
    : T extends ArgType.Message
    ? Message<true>
    : T extends ArgType.Member
    ? GuildMember
    : T extends ArgType.GuildEmoji
    ? GuildEmoji
    : T extends ArgType.ApplicationEmoji
    ? ApplicationEmoji
    : T extends ArgType.OverwritePermission 
    ? OverwritePermission
    : T extends ArgType.Sticker
    ? Sticker
    : T extends ArgType.Reaction
    ? MessageReaction
    : T extends ArgType.Webhook
    ? Webhook
    : T extends ArgType.Invite
    ? Invite
    : T extends ArgType.ForumTag
    ? GuildForumTag
    : T extends ArgType.Time
    ? number
    : T extends ArgType.Permission
    ? PermissionsString
    : T extends ArgType.Emoji
    ? Emoji
    : T extends ArgType.AutomodRule
    ? AutoModerationRule
    : T extends ArgType.ScheduledEvent
    ? GuildScheduledEvent
    : T extends ArgType.StageInstance
    ? StageInstance
    : T extends ArgType.SoundboardSound
    ? SoundboardSound
    : null

export type MarkNullable<T, Req extends boolean, Rest extends boolean = boolean> = Rest extends true
    ? T
    : Req extends true
    ? T
    : T | null

export type UnwrapArg<T> = T extends IArg<infer Type, infer Required, infer Rest, infer Enum>
    ? MarkRest<MarkNullable<GetArgType<Type, Enum>, Required, Rest>, Rest>
    : never

export type UnwrapArgs<T> = T extends [infer L, ...infer R] ? [UnwrapArg<L>, ...UnwrapArgs<R>] : []

export class NativeFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    public readonly async: boolean
    public path!: string
    
    public constructor(public readonly data: INativeFunction<T, Unwrap>) {
        // @ts-ignore
        this.async = data.execute[Symbol.toStringTag] === "AsyncFunction"
    }

    public get name() {
        return this.data.name
    } 
}