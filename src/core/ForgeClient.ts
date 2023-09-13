import { Client, ClientOptions, IntentsBitField, Partials } from "discord.js"
import { CommandType } from "../structures/BaseCommand"
import { EventManager, NativeEventName } from "../managers/EventManager"
import { Compiler } from "./Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager"
import { ForgeExtension } from "../structures/ForgeExtension"
import { InviteSystem } from "../structures/InviteSystem"
import { CooldownManager } from "../managers/CooldownManager"
import { NativeCommandManager } from "../managers/NativeCommandManager"
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager"

export interface IRestriction {
    guildIDs?: string[]
    userIDs?: string[]
}

export interface IForgeClientOptions extends ClientOptions {
    commands?: string
    events?: CommandType[]
    prefixes: string[]
    functions?: string
    token?: string
    useInviteSystem?: boolean
    optionalGuildID?: boolean
    extensions?: ForgeExtension[]
    restrictions?: IRestriction
}

export class ForgeClient extends Client<true> {
    declare public options: (Omit<ClientOptions, "intents"> & { intents: IntentsBitField; }) & IForgeClientOptions
    public commands = new NativeCommandManager(this)
    public applicationCommands = new ApplicationCommandManager(this)
    public events = new EventManager(this)
    public cooldowns = new CooldownManager(this)
    public functions = new ForgeFunctionManager(this);

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
                Partials.User
            ],
            ...options
        })
        
        this.#init()
    }

    #init() {
        if (this.options.useInviteSystem) 
            InviteSystem["init"](this)

        if (this.options.extensions?.length) {
            for (let i = 0, len = this.options.extensions.length;i < len;i++) {
                const ext = this.options.extensions[i]
                ext.init(this)
                console.log(`Extension ${ext.name} has been loaded! Version ${ext.version}`)
            }
        }

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

    override login(token?: string | undefined): Promise<string> {
        return super.login(token ?? this.options.token).then(async str => {
            await this.applicationCommands.register()
            return str
        })
    }
}