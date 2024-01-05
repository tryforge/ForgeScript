import { ForgeClient } from "../core/ForgeClient"
import { FunctionManager } from "../managers/FunctionManager"
import { ForgeExtension } from "../structures/forge/ForgeExtension"

// Just a ext test
export class MyExtension extends ForgeExtension {
    public description: string = "Some description"
    public name: string = "UwU"
    public version: string = "1.0.0"

    public static client: ForgeClient

    public init(client: ForgeClient): void {
        MyExtension.client = client
    }
}
