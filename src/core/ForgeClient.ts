import { Client, ClientOptions, DefaultWebSocketManagerOptions, IntentsBitField, Partials, disableValidators } from "discord.js"
import { BaseCommand, CommandType } from "../structures/base/BaseCommand"
import { EventManager, NativeEventName } from "../managers/EventManager"
import { Compiler } from "./Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager"
import { ForgeExtension } from "../structures/forge/ForgeExtension"
import { InviteTracker } from "../structures/trackers/InviteTracker"
import { CooldownManager } from "../managers/CooldownManager"
import { NativeCommandManager } from "../managers/NativeCommandManager"
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager"
import { ThreadManager } from "../managers/ThreadManager"
import { LogPriority, Logger } from "../structures/@internal/Logger"
import { VoiceTracker } from "../structures/trackers/VoiceTracker"

disableValidators()

export interface ITrackers {
    invites?: boolean
    voice?: boolean
}

export interface IRestrictions {
    guildIDs?: string[]
    userIDs?: string[]
}

export interface IForgeClientOptions extends ClientOptions {
    commands?: string
    events?: CommandType[]
    prefixes: string[]
    logLevel?: LogPriority
    functions?: string
    allowBots?: boolean
    token?: string

    /**
     * @deprecated use trackers: { invites: true } instead
     */
    useInviteSystem?: boolean
    mobile?: boolean
    trackers?: ITrackers

    /**
     * @deprecated Does not work
     */
    optionalGuildID?: boolean
    extensions?: ForgeExtension[]
    restrictions?: IRestrictions

    /**
     * Array of function names you want to disable.
     */
    disableFunctions?: string[]
}

export class ForgeClient extends Client<true> {
    public declare options: (Omit<ClientOptions, "intents"> & { intents: IntentsBitField }) & IForgeClientOptions
    public readonly commands = new NativeCommandManager(this)
    public readonly applicationCommands = new ApplicationCommandManager(this)
    public readonly events = new EventManager(this)
    public readonly cooldowns = new CooldownManager(this)
    public readonly functions = new ForgeFunctionManager(this)
    public readonly threading = new ThreadManager(this);
    
    // eslint-disable-next-line no-undef
    [x: PropertyKey]: unknown

    public constructor(options: IForgeClientOptions) {
        super({
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User,
            ],
            ...options,
        })

        this.#init()
    }

    #init() {
        if (this.options.logLevel !== undefined) Logger.Priority = this.options.logLevel

        if (this.options.mobile) {
            Reflect.set(DefaultWebSocketManagerOptions.identifyProperties, "browser", "Discord iOS")
        }
        
        if (this.options.useInviteSystem) {
            this.options.trackers ??= {}
            this.options.trackers.invites = true
            Logger.deprecated("ForgeClient#useInviteSystem is deprecated and will be removed in future versions, please use ForgeClient#trackers#invites instead.")
        }

        if (this.options.trackers) {
            if (this.options.trackers.invites)
                InviteTracker["init"](this)
            if (this.options.trackers.voice)
                VoiceTracker["init"](this)
        }

        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length; i < len; i++) {
                this.options.extensions[i]["validateAndInit"](this)
            }
        }

        FunctionManager.loadNative()
        
        if (this.options.disableFunctions?.length)
            FunctionManager.disable(this.options.disableFunctions)

        Compiler.setFunctions(FunctionManager.raw)

        if (this.options.commands) {
            this.commands.load(this.options.commands)
        }

        if (this.options.functions) {
            this.functions.load(this.options.functions)
        }

        if (this.options.events?.length) {
            this.events.load(NativeEventName, this.options.events)
        }
    }

    get<T>(key: string) {
        return this[key] as T
    }

    public get version() {
        return require("../../package.json").version as string
    }

    public canRespondToBots(cmd: BaseCommand<any>): boolean {
        return !!cmd.data.allowBots || (!!this.options.allowBots && cmd.data.allowBots === undefined)
    }

    override login(token?: string | undefined): Promise<string> {
        return super.login(token ?? this.options.token).then(async (str) => {
            await this.applicationCommands.register()
            return str
        })
    }
}
