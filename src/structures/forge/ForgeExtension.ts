import { ForgeClient } from "../../core/ForgeClient"
import getVersionNumber from "../../functions/getVersionNumber"
import { ErrorType, ForgeError } from "./ForgeError"
import { Logger } from "../@internal/Logger"
import { FunctionManager } from "../../managers"

export abstract class ForgeExtension {
    public abstract name: string
    public abstract description: string
    public abstract version: string

    /**
     * Only the versions written here will be allowed
     */
    public targetVersions?: string[]

    /**
     * A list of extension names this extension requires
     */
    public requireExtensions?: string[]

    public abstract init(client: ForgeClient): void

    protected validateAndInit(client: ForgeClient) {
        const version = client.version
        const n = getVersionNumber(version)

        if (this.targetVersions?.length && !this.targetVersions.some(x => getVersionNumber(x) === n)) {
            throw new ForgeError(
                null,
                ErrorType.UnsupportedExtensionVersion,
                this.name,
                version
            )
        }

        if (this.requireExtensions?.length) {
            for (const wanted of this.requireExtensions) {
                if (!client.options.extensions!.some(x => x.name === wanted)) {
                    throw new ForgeError(
                        null,
                        ErrorType.RequiredExtension,
                        this.name,
                        wanted
                    )
                }
            }
        }

        try {
            this.init(client)
            Logger.info(`Extension ${this.name}@${this.version} has been loaded!`)
        } catch (error) {
            Logger.error(`Extension ${this.name}@${this.version} failed to load:`, error)
        }
    }

    protected load(path: string) {
        return FunctionManager.load(this.name, path)
    }
}