import { AnySelectMenuInteraction, BaseChannel, BaseInteraction, ChatInputCommandInteraction, ContextMenuCommandInteraction, Guild, GuildEmoji, GuildMember, Interaction, Message, MessageReaction, Role, User } from "discord.js"
import { CompiledFunction } from "./CompiledFunction"
import { Container } from "./Container"
import { IArg, UnwrapArgs } from "./NativeFunction"
import { Return, ReturnType } from "./Return"
import { IRunnable } from "../core/Interpreter"
import noop from "../functions/noop"
import { ForgeError } from "./ForgeError"

export type ExpectCallback<T extends [...IArg[]], Unwrap extends boolean> = (args: UnwrapArgs<T>) => Promise<Return> | Return

export interface IHttpOptions {
    body: string
    headers: Record<string, string>
    method: string
}

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
    
    executionTimestamp!: number
    http: Partial<IHttpOptions> = {}

    #keywords: Record<string, string> = {}
    #environment: Record<string, unknown> = {}

    public readonly container = new Container()

    // eslint-disable-next-line no-unused-vars
    public constructor(public readonly runtime: IRunnable) {}

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

    public get member() {
        if (!this.obj) return null
        return this.#member ??=
            this.obj instanceof GuildMember ?
                this.obj :
                "member" in this.obj && this.obj.member instanceof GuildMember ? 
                    this.obj.member :
                    null
    }

    public get emoji() {
        if (!this.obj) return null

        return this.#emoji ??= 
            this.obj instanceof GuildEmoji ? 
                this.obj :
                null
    }

    public get role() {
        if (!this.obj) return null
        return this.#role ??= 
            this.obj instanceof Role ? 
                this.obj :
                null
    }

    public get reaction() {
        if (!this.obj) return null

        return this.#reaction ??=
            this.obj instanceof MessageReaction ? 
                this.obj :
                null
    }

    public get message() {
        if (!this.obj) return null
        return this.#message ??= 
            "message" in this.obj && this.obj.message ? 
                this.obj.message as Message :
                this.obj instanceof Message ? 
                    this.obj :
                    null
    }

    public get interaction() {
        if (!this.obj) return null
        return this.#interaction ??= 
            this.obj instanceof BaseInteraction ?
                this.obj :
                null
    }

    public get user() {
        if (!this.obj) return null
        return this.#user ??= 
            "user" in this.obj ? 
                this.obj.user : 
                "author" in this.obj ?
                    this.obj.author :
                    this.obj instanceof User ?
                        this.obj :
                        "member" in this.obj ? 
                            this.obj.member?.user ?? null : 
                            null
    }

    public get guild() {
        if (!this.obj) return null
        return this.#guild ??= 
            "guild" in this.obj ? 
                this.obj.guild as Guild : 
                this.obj instanceof Guild ? 
                    this.obj :
                    "message" in this.obj ? 
                        this.obj.message.guild :
                        null
    }

    public get channel() {
        if (!this.obj) return null
        return this.#channel ??= 
            "channel" in this.obj ? 
                this.obj.channel?.partial ? 
                    null : 
                    this.obj.channel : 
                this.obj instanceof BaseChannel ? 
                    this.obj :
                    "message" in this.obj ? 
                        this.obj.message.channel as BaseChannel :
                        null
    }

    public async handle<Args extends [...IArg[]], Unwrap extends boolean>(fn: CompiledFunction<Args, Unwrap>, cb: ExpectCallback<Args, Unwrap>): Promise<Return> {
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
            this.alert(log).catch(console.error.bind(null, log))
        } else if (rt.error) {
            const err = rt.value as ForgeError
            this.alert(err.message).catch(console.error.bind(null, err))
        }

        return false
    }

    public clearHttpOptions() {
        this.http = {}
    }

    public setEnvironmentKey(name: string, value: unknown) {
        return this.#environment[name] = value
    }

    public deleteEnvironmentKey(name: string) {
        return delete this.#environment[name]
    }

    public getEnvironmentKey(args: string[]) {
        let previous = this.#environment as any
        for (let i = 0, len = args.length;i < len;i++) {
            const key = args[i]
            if (!(key in previous)) return
            previous = previous[key]
        }
        return previous
    }

    public getKeyword(name: string) {
        return this.#keywords[name]
    }

    public deleteKeyword(name: string) {
        return delete this.#keywords[name]
    }

    public setKeyword(name: string, value: string) {
        return this.#keywords[name] = value
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
}