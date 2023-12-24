import { ForgeClient } from "../../core/ForgeClient"
import getVersionNumber from "../../functions/getVersionNumber"
import { ErrorType, ForgeError } from "../@internal/ForgeError"
import { Logger } from "../@internal/Logger"

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

        this.init(client)
        Logger.info(`Extension ${this.name} has been loaded! Version ${this.version}`)
    }
}