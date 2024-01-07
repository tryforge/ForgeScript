import { disableValidators, ClientOptions, Client, IntentsBitField, Partials, DefaultWebSocketManagerOptions, Message } from "discord.js"
import { IExtendedCompilationResult, Compiler } from "."
import { NativeCommandManager, EventManager, CooldownManager, ForgeFunctionManager, FunctionManager, NativeEventName, ApplicationCommandManager, ThreadManager, BaseCommandManager } from "../managers"
import { CommandType, LogPriority, ForgeExtension, Logger, InviteTracker, ClassType, ClassInstance, ForgeError, ErrorType, BaseCommand } from "../structures"
import { VoiceTracker } from "../structures/trackers/VoiceTracker"
import { Interpreter } from "./Interpreter"

disableValidators()

export interface ITrackers {
    invites?: boolean
    voice?: boolean
}

export interface IRestrictions {
    guildIDs?: string[]
    userIDs?: string[]
}

export interface IRawForgeClientOptions extends ClientOptions {
    /**
     * Specifies a folder (path) to load all commands from it
     */
    commands?: string

    /**
     * The discord.js events our bot will use
     */
    events?: CommandType[]

    /**
     * The prefixes our bot will act upon for command messages
     */
    prefixes: string[]

    /**
     * Specifies the logs to be received
     */
    logLevel?: LogPriority
    functions?: string

    /**
     * Allows the bot to execute events triggered by other bots (and itself)
     */
    allowBots?: boolean
    token?: string

    /**
     * @deprecated use trackers: { invites: true } instead
     */
    useInviteSystem?: boolean

    /**
     * This will connect the client to Discord with the mobile status
     */
    mobile?: boolean
    trackers?: ITrackers

    /**
     * @deprecated Does not work
     */
    optionalGuildID?: boolean
    extensions?: ForgeExtension[]
    
    restrictions?: IRestrictions

    /**
     * Allows the bot to re-use messages that were edited to find possibly command calls. 
     * If a number is passed, it's treated as the amount of milliseconds that can pass before
     * the message becomes completely unusable.  
     */
    respondOnEdit?: number | boolean

    /**
     * Array of function names you want to disable.
     */
    disableFunctions?: string[]
}

export interface IForgeClientOptions extends Omit<IRawForgeClientOptions, "prefixes"> {
    prefixes: IExtendedCompilationResult[]
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

    public constructor(options: IRawForgeClientOptions) {
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

        this.#init(options)
    }

    #init(raw: IRawForgeClientOptions) {
        if (this.options.logLevel !== undefined) Logger.Priority = this.options.logLevel

        if (this.options.mobile) {
            Reflect.set(DefaultWebSocketManagerOptions.identifyProperties, "browser", "Discord iOS")
        }
        
        if (this.options.useInviteSystem) {
            this.options.trackers ??= {}
            this.options.trackers.invites = true
            Logger.deprecated("ForgeClient#useInviteSystem is deprecated and will be removed in future versions, please use ForgeClient#trackers#invites instead.")
        }

        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length; i < len; i++) {
                this.options.extensions[i]["validateAndInit"](this)
            }
        }

        FunctionManager.loadNative()
        EventManager.loadNative()

        if (this.options.trackers) {
            if (this.options.trackers.invites)
                InviteTracker["init"](this)
            if (this.options.trackers.voice)
                VoiceTracker["init"](this)
        }
        
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
        
        // At last, load prefixes
        this.options.prefixes = raw.prefixes.map(x => Compiler.compile(x))
    }

    public getExtension<T extends ClassType, B extends boolean>(type: T, required?: B): B extends true ? ClassInstance<T> : ClassInstance<T> | null {
        const finder = this.options.extensions?.find(x => x instanceof type)
        if (!finder && required)  {
            throw new ForgeError(
                null,
                ErrorType.ExtensionNotFound,
                type.constructor.name
            )
        }

        return (finder ?? null) as ClassInstance<T>
    }

    get<T>(key: string) {
        return this[key] as T
    }

    public get version() {
        return require("../../package.json").version as string
    }

    public async getPrefix(msg: Message): Promise<string | null> {
        for (let i = 0, len = this.options.prefixes.length;i < len;i++) {
            const raw = this.options.prefixes[i]
            const resolved = await Interpreter.run({
                client: this,
                command: null,
                data: raw,
                obj: msg,
                redirectErrorsToConsole: true,
                doNotSend: true
            })

            if (resolved !== null && msg.content.startsWith(resolved)) {
                return resolved
            }
        }

        return null
    }

    public canRespondToBots(cmd: BaseCommand<any>): boolean {
        return !!cmd.data.allowBots || (!!this.options.allowBots && cmd.data.allowBots === undefined)
    }

    /**
     * Returns all available command managers
     */
    public get commandManagers()  {
        const arr = new Array<BaseCommandManager<unknown>>(this.commands)

        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length;i < len;i++) {
                const ext = this.options.extensions[i]
                const manager = ext.getCommandManager()
                if (!manager)
                    continue
                arr.push(manager)
            }
        }

        return  arr
    }

    override login(token?: string | undefined): Promise<string> {
        return super.login(token ?? this.options.token).then(async (str) => {
            await this.applicationCommands.register()
            return str
        })
    }
}
