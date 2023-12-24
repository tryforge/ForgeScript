import { ForgeClient } from "../core/ForgeClient"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeExtension } from "../structures/forge/ForgeExtension"

// Just a ext test
export class MyExtension extends ForgeExtension {
    public description: string = "Some description"
    public name: string = "My extension"
    public version: string = "1.0.0"

    public requireExtensions = [
        "Tmr"
    ] 

    public targetVersions = [
        "1.3.0"
    ]

    public init(client: ForgeClient): void {
        // eslint-disable-next-line no-undef
        FunctionManager.load(`${__dirname}/custom`)
    }
}
