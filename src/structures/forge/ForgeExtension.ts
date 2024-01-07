import { ForgeClient } from "../../core/ForgeClient"
import getVersionNumber from "../../functions/getVersionNumber"
import { ErrorType, ForgeError } from "./ForgeError"
import { Logger } from "../@internal/Logger"
import { BaseCommandManager, FunctionManager } from "../../managers"
import { ClassInstance, ClassType } from ".."

export abstract class ForgeExtension {
    private _commands?: BaseCommandManager<unknown> | null

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

    getCommandManager() {
        if (this._commands === null)
            return this._commands
        
        const keys = Object.getOwnPropertyNames(this)
        for (let i = 0, len = keys.length;i < len;i++) {
            const key = keys[i]
            const value = Reflect.get(this, key)
            if (value instanceof BaseCommandManager)
                return this._commands = value
        }

        return this._commands = null
    }
}