import { Compiler, IExtendedCompilationResult } from "../../core"
import { IApplicationCommandData, RegistrationType } from "../../managers/ApplicationCommandManager"
import { ErrorType, ForgeError } from "../forge/ForgeError"

export class ApplicationCommand {
    compiled: IExtendedCompilationResult

    public constructor(public readonly options: IApplicationCommandData) {
        this.compiled = Compiler.compile(options.code, options.path)
    }

    public get name() {
        return this.options.data.name
    }

    public get registrationType() {
        return this.options.type ?? RegistrationType.Global
    }

    public mustRegisterAs(type: Exclude<RegistrationType, RegistrationType.All>) {
        return this.registrationType === RegistrationType.All || this.registrationType === type
    }

    public toJSON() {
        if (!this.options.data)
            throw new ForgeError(null, ErrorType.MissingApplicationCommandData, this.options.path ?? "index file")

        return "toJSON" in this.options.data ? this.options.data.toJSON() : this.options.data
    }
}
