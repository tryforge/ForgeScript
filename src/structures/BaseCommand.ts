import { ClientEvents, Interaction, InteractionType } from "discord.js"
import { Compiler, IExtendedCompilationResult } from "../core/Compiler"
import { Context, Logger } from "."
import { IRunnable } from "../core"

export type CommandType = keyof ClientEvents
export type RawExecutableCode = (ctx: Context) => Promise<unknown[] | null>

export type CommandInteractionTypes = 
    "button" |
    "modal" |
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
    [x: PropertyKey]: unknown
}

export interface ICompiledCommand {
    name?: IExtendedCompilationResult
    code: IExtendedCompilationResult
}

export class BaseCommand<T> {
    public readonly compiled: ICompiledCommand

    public constructor(public readonly data: IBaseCommand<T>) {
        this.compiled = {
            name: Compiler.compile(data.name, this.data.path),
            code: Compiler.compile(data.code, this.data.path),
        }
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
