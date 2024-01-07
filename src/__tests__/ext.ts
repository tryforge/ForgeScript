import { ForgeClient } from "../core/ForgeClient"
import { BaseCommandManager } from "../managers"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeExtension } from "../structures/forge/ForgeExtension"

export class RndManager extends BaseCommandManager<{}> {
    public handlerName = "cope"
}

// Just a ext test
export class MyExtension extends ForgeExtension {
    public description: string = "Some description"
    public name: string = "UwU"
    public version: string = "1.0.0"

    public random!: RndManager

    public init(client: ForgeClient): void {
        this.random = new RndManager(client)
    }
}
