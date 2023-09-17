import { Compiler, IExtendedCompilationResult } from "../core"
import { IApplicationCommandData } from "../managers/ApplicationCommandManager"

export class ApplicationCommand {
    compiled: IExtendedCompilationResult

    public constructor(public readonly options: IApplicationCommandData) {
        this.compiled = Compiler.compile(options.code)
    }

    public get name() {
        return this.options.data.name
    }

    public toJSON() {
        return "toJSON" in this.options.data ? this.options.data.toJSON() : this.options.data
    }
}
