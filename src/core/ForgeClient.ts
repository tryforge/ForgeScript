import { Client, ClientOptions, IntentsBitField } from "discord.js"
import { CommandManager } from "../managers/CommandManager"
import { CommandType } from "../structures/Command"
import { EventManager } from "../managers/EventManager"
import { Compiler } from "./Compiler"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager"
import { ForgeExtension } from "../structures/ForgeExtension"

export interface IForgeClientOptions extends ClientOptions {
    commands?: string
    events?: CommandType[]
    prefixes: string[]
    functions?: string
    optionalGuildID?: boolean
    extensions?: ForgeExtension[]
}

export class ForgeClient extends Client<true> {
    declare public options: (Omit<ClientOptions, "intents"> & { intents: IntentsBitField; }) & IForgeClientOptions
    public commands = new CommandManager(this)
    public events = new EventManager(this)
    public functions = new ForgeFunctionManager(this);
    // eslint-disable-next-line no-undef
    [x: PropertyKey]: unknown

    public constructor(options: IForgeClientOptions) {
        super(options)
        this.#init()
    }

    #init() {
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
            this.events.load(this.options.events)
        }
    }

    get<T>(key: string) {
        return this[key] as T 
    }
}