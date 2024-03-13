import { ClientEvents, Interaction } from "discord.js"
import { Context } from ".."
import { IExtendedCompilationResult, Compiler, ForgeClient } from "../../core"
import { ForgeError, ErrorType } from "../forge/ForgeError"


export type CommandType = keyof ClientEvents
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>

export type CommandInteractionTypes = 
    "button" |
    "modal" |
    "slashCommand" | 
    "autocomplete" | 
    "contextMenu" |
    "selectMenu"

export interface IBaseCommand<T> {
    name?: string
    path?: string
    type: T
    code: string
    guildOnly?: boolean
    unprefixed?: boolean
    aliases?: string[]
    allowedInteractionTypes?: CommandInteractionTypes[]
    allowBots?: boolean
    unloadable?: boolean
    disableConsoleErrors?: boolean
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
                        (type === "slashCommand" && i.isChatInputCommand) || 
                        (type === "button" && i.isButton()) ||
                        (type === "selectMenu" && i.isAnySelectMenu()) ||
                        (type === "modal" && i.isModalSubmit()) ||
                        (type === "autocomplete" && i.isAutocomplete()) ||
                        (type === "contextMenu" && i.isContextMenuCommand())
                )
            )
        )
    }
}
