import { ForgeClient } from "../core/ForgeClient"

export abstract class ForgeExtension {
    public abstract name: string
    public abstract description: string
    public abstract version: string

    public abstract init(client: ForgeClient): void
}
