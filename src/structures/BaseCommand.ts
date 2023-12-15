import { ClientEvents, Interaction, InteractionType } from "discord.js"
import { Compiler, IExtendedCompilationResult } from "../core/Compiler"
import { Context } from "."
import { IRunnable } from "../core"

export type CommandType = keyof ClientEvents

export type CommandInteractionTypes = 
    "button" |
    "modal" |
    "autocomplete" | 
    "contextMenu" |
    "selectMenu"

export interface IBaseCommand<T> {
    name?: string
    type: T
    code: string
    guildOnly?: boolean
    unprefixed?: boolean
    aliases?: string[]
    allowedInteractionTypes?: CommandInteractionTypes[]
    allowBots?: boolean
    [x: PropertyKey]: unknown
}

export interface ICompiledCommand {
    name?: IExtendedCompilationResult
    code: IExtendedCompilationResult
}

export class BaseCommand<T> {
    public readonly compiled: ICompiledCommand

    public constructor(public readonly data: IBaseCommand<T>, public unloadable = false) {
        this.compiled = {
            name: Compiler.compile(data.name),
            code: Compiler.compile(data.code),
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
