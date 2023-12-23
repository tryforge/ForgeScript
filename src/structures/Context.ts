import {
    AnySelectMenuInteraction,
    AutoModerationActionExecution,
    BaseChannel,
    BaseInteraction,
    ChatInputCommandInteraction,
    ContextMenuCommandInteraction,
    Guild,
    GuildEmoji,
    GuildMember,
    Interaction,
    Message,
    MessageReaction,
    Role,
    User,
} from "discord.js"
import { CompiledFunction } from "./CompiledFunction"
import { Container } from "./Container"
import { IArg, UnwrapArgs } from "./NativeFunction"
import { Return, ReturnType } from "./Return"
import { IRunnable } from "../core/Interpreter"
import noop from "../functions/noop"
import { ForgeError } from "./ForgeError"
import { Logger } from "./Logger"

export type ExpectCallback<T extends [...IArg[]], Unwrap extends boolean> = (
    args: UnwrapArgs<T>
) => Promise<Return> | Return

export interface IHttpOptions {
    body: string
    headers: Record<string, string>
    method: string
}

export type ClassType = new (...args: any[]) => any
export type ClassInstance<T> = T extends new (...args: any[]) => infer T ? T : never

export class Context {
    #member?: GuildMember | null
    #user?: User | null
    #guild?: Guild | null
    #channel?: BaseChannel | null
    #message?: Message | null
    #interaction?: Interaction | null
    #role?: Role | null
    #reaction?: MessageReaction | null
    #emoji?: GuildEmoji | null
    #automod?: AutoModerationActionExecution | null

    // eslint-disable-next-line no-undef
    [props: PropertyKey]: unknown

    executionTimestamp!: number
    http: Partial<IHttpOptions> = {}

    #keywords: Record<string, unknown> = {}
    #environment: Record<string, unknown> = {}

    public readonly container = new Container()

    // eslint-disable-next-line no-unused-vars
    public constructor(public readonly runtime: IRunnable) {
        if (runtime.environment) this.#environment = runtime.environment
        if (runtime.keywords) this.#keywords = runtime.keywords
    }

    public get client() {
        return this.runtime.client
    }

    public get obj() {
        return this.runtime.obj
    }

    public get args() {
        return this.runtime.args ?? []
    }

    public get states() {
        return this.runtime.states
    }

    public get automod() {
        return this.#automod ??= this.obj instanceof AutoModerationActionExecution ? this.obj : null
    }

    public get member() {
        return (this.#member ??=
            this.obj instanceof GuildMember
                ? this.obj
                : "member" in this.obj && this.obj.member instanceof GuildMember
                    ? this.obj.member
                    : null)
    }

    public get emoji() {
        return (this.#emoji ??= this.obj instanceof GuildEmoji ? this.obj : null)
    }

    public get role() {
        return (this.#role ??= this.obj instanceof Role ? this.obj : null)
    }

    public get reaction() {
        return (this.#reaction ??= this.obj instanceof MessageReaction ? this.obj : null)
    }

    public get message() {
        return (this.#message ??=
            "message" in this.obj && this.obj.message
                ? (this.obj.message as Message)
                : this.obj instanceof Message
                    ? this.obj
                    : null)
    }

    public get interaction() {
        return (this.#interaction ??= this.obj instanceof BaseInteraction ? this.obj as Interaction : null)
    }

    public get user() {
        return (this.#user ??=
            "user" in this.obj
                ? this.obj.user
                : "author" in this.obj
                    ? this.obj.author
                    : this.obj instanceof User
                        ? this.obj
                        : "member" in this.obj
                            ? this.obj.member?.user ?? null
                            : null)
    }

    public get guild() {
        return (this.#guild ??=
            "guild" in this.obj
                ? (this.obj.guild as Guild)
                : this.obj instanceof Guild
                    ? this.obj
                    : "message" in this.obj
                        ? this.obj.message.guild
                        : null)
    }

    public get channel() {
        return (this.#channel ??=
            "channel" in this.obj
                ? this.obj.channel?.partial
                    ? null
                    : this.obj.channel
                : this.obj instanceof BaseChannel
                    ? this.obj
                    : "message" in this.obj
                        ? (this.obj.message.channel as BaseChannel)
                        : null)
    }

    public async handle<Args extends [...IArg[]], Unwrap extends boolean>(
        fn: CompiledFunction<Args, Unwrap>,
        cb: ExpectCallback<Args, Unwrap>
    ): Promise<Return> {
        const unwrap = await fn["resolveArgs"](this)

        // If not success, return error.
        if (!unwrap.success) {
            return unwrap
        }

        // Call the callback.
        return cb(unwrap.value as UnwrapArgs<Args>)
    }

    public alert(content: string) {
        this.container.reset()
        return this.container.send(this.obj, content)
    }

    public handleNotSuccess(rt: Return) {
        if (rt.return || rt.break || rt.continue) {
            const log = ":x: " + ReturnType[rt.type] + " statements are not allowed in outer scopes."
            this.alert(log).catch(Logger.error.bind(null, log))
        } else if (rt.error) {
            const err = rt.value as ForgeError
            this.alert(err.message).catch(Logger.error.bind(null, err))
        }

        return false
    }

    public clearHttpOptions() {
        this.http = {}
    }

    public setEnvironmentKey(name: string, value: unknown) {
        return (this.#environment[name] = value)
    }

    public deleteEnvironmentKey(name: string) {
        return delete this.#environment[name]
    }

    public getEnvironmentKey(...args: string[]) {
        let previous = this.#environment as any
        for (let i = 0, len = args.length; i < len; i++) {
            const key = args[i]
            if (!(key in previous)) return
            previous = previous[key]
            if (typeof previous !== "object" || previous === null) break
        }

        return previous
    }

    public getKeyword(name: string) {
        return this.#keywords[name]
    }

    public deleteKeyword(name: string) {
        return delete this.#keywords[name]
    }

    public setKeyword(name: string, value: unknown) {
        return (this.#keywords[name] = value)
    }

    public hasKeyword(name: string) {
        return name in this.#keywords
    }

    public clearKeywords() {
        this.#keywords = {}
    }

    public clearEnvironment() {
        this.#environment = {}
    }

    public isSelectMenu(): this is this & { get interaction(): AnySelectMenuInteraction } {
        return !!this.interaction && this.interaction.isAnySelectMenu()
    }

    public isContextCommand(): this is this & { get interaction(): ContextMenuCommandInteraction } {
        return !!this.interaction && this.interaction.isContextMenuCommand()
    }

    public isCommand(): this is this & { get interaction(): ChatInputCommandInteraction } {
        return !!this.interaction && this.interaction.isChatInputCommand()
    }

    public getEnvironmentInstance<T extends ClassType>(type: T, ...keys: string[]): ClassInstance<T> | null {
        const got = this.getEnvironmentKey(...keys)
        return got && got instanceof type ? got : null
    }

    public get<T>(key: PropertyKey) {
        return this[key] as T
    }

    private error() {
        throw null
    }
}
