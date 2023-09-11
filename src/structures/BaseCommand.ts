import { ClientEvents } from "discord.js"
import { Compiler, IExtendedCompilationResult } from "../core/Compiler"

export type CommandType = keyof ClientEvents

export interface IBaseCommand<T> {
    name?: string
    type: T
    code: string
    guildOnly?: boolean
    unprefixed?: boolean
    aliases?: string[]
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
            code: Compiler.compile(data.code)
        }
    }

    public get name() {
        return this.data.name
    }

    public get type() {
        return this.data.type
    }
}