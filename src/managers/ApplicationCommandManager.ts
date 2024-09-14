/* eslint-disable indent */
import {
    APIApplicationCommandOption,
    APIApplicationCommandSubcommandOption,
    ApplicationCommandData,
    ApplicationCommandDataResolvable,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    ChatInputCommandInteraction,
    Collection,
    CommandInteraction,
    CommandInteractionOption,
    ContextMenuCommandBuilder,
    ContextMenuCommandInteraction,
    Events,
    Guild,
    Interaction,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
    SlashCommandBuilder,
} from "discord.js"
import { ApplicationCommand } from "../structures/base/ApplicationCommand"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { ForgeClient } from "../core"
import { NativeEventName } from "./EventManager"
import { readdirSync, readFileSync, statSync, existsSync } from "fs"
import { join } from "path"
import { cwd } from "process"

export enum RegistrationType {
    Global,
    Guild,
    All,
}

export interface IApplicationCommandData {
    data:
        | SlashCommandBuilder
        | ContextMenuCommandBuilder
        | RESTPostAPIChatInputApplicationCommandsJSONBody
        | RESTPostAPIContextMenuApplicationCommandsJSONBody
    code: string
    type?: RegistrationType
    independent?: boolean
    path?: string | null
}

export class ApplicationCommandManager {
    /**
     * If:
     * - value is app command = slash command
     * - value is collection:
     *  - value is slash command = subcommands
     *  - value is collection = group with subcommands
     */
    private commands = new Collection<
        string,
        ApplicationCommand | Collection<string, ApplicationCommand | Collection<string, ApplicationCommand>>
    >()
    private path!: string

    public constructor(public readonly client: ForgeClient) {}

    /**
     * PATH TREE MATTERS
     * @param path
     */
    public load(path: string = this.path) {
        if (!path) return

        this.path ??= path
        this.commands.clear()

        for (const mainPath of readdirSync(path)) {
            const resolved = join(path, mainPath)
            const stats = statSync(resolved)
            if (stats.isDirectory()) {
                const col = new Collection<string, ApplicationCommand | Collection<string, ApplicationCommand>>()

                for (const secondPath of readdirSync(resolved)) {
                    const secondResolved = join(resolved, secondPath)
                    const stats = statSync(secondResolved)
                    if (stats.isDirectory()) {
                        const nextCol = new Collection<string, ApplicationCommand>()

                        for (const lastPath of readdirSync(secondResolved)) {
                            const thirdResolved = join(secondResolved, lastPath)
                            const stats = statSync(thirdResolved)
                            if (stats.isDirectory())
                                throw new Error(`Disallowed folder found for slash command tree: ${thirdResolved}`)
                            const loaded = this.loadOne(join(cwd(), thirdResolved))
                            if (!loaded) continue
                            else if (loaded.options.independent) {
                                this.commands.set(loaded.name, loaded)
                                continue
                            }

                            nextCol.set(loaded.name, loaded)
                        }

                        if (nextCol.size === 0) continue
                        col.set(secondPath, nextCol)
                    } else {
                        const loaded = this.loadOne(join(cwd(), secondResolved))
                        if (!loaded) continue
                        else if (loaded.options.independent) {
                            this.commands.set(loaded.name, loaded)
                            continue
                        }

                        col.set(loaded.name, loaded)
                    }
                }

                if (col.size === 0) continue
                this.commands.set(mainPath, col)
            } else {
                const loaded = this.loadOne(join(cwd(), resolved))
                if (!loaded) continue
                this.commands.set(loaded.name, loaded)
            }
        }
    }

    private getDisplayOptions(input: readonly CommandInteractionOption[], hideName: boolean) {
        const arr = new Array<string>()

        for (const data of input) {
            if (data.value !== undefined) {
                arr.push(`${hideName ? "" : `${data.name}: `}${data.value}`)
            } else if (data.options?.length) arr.push(...this.getDisplayOptions(data.options, hideName))
        }

        return arr
    }

    public getDisplay(input: Interaction | null, hideName: boolean) {
        if (input instanceof ChatInputCommandInteraction) {
            const commandName = input.commandName
            const subcommandName = input.options.getSubcommand(false)
            const subcommandGroupName = input.options.getSubcommandGroup(false)
            const filteredOptions = this.getDisplayOptions(input.options.data, hideName)
            return `/${commandName}${
                subcommandGroupName
                    ? subcommandName
                        ? ` ${subcommandGroupName} ${subcommandName}`
                        : ` ${subcommandGroupName}`
                    : subcommandName
                    ? ` ${subcommandName}`
                    : ""
            } ${filteredOptions.join(" ")}`
        } else if (input instanceof ContextMenuCommandInteraction) return `/${input.commandName}`
        return null
    }

    public get(input: CommandInteraction): ApplicationCommand | null {
        const commandName = input.commandName
        if (!input.isChatInputCommand()) return this.commands.get(commandName) as ApplicationCommand
        const subcommandName = input.options.getSubcommand(false)
        const subcommandGroupName = input.options.getSubcommandGroup(false)

        const cmd = this.commands.get(commandName) ?? null
        if (cmd instanceof Collection) {
            const col = cmd.get(subcommandGroupName ?? subcommandName!)
            if (col instanceof Collection) {
                return col.get(subcommandName!) ?? null
            }

            return col ?? null
        }

        return cmd
    }

    /**
     * **WARNING** This function does not allow subcommand & subcommand group options. Consider using ApplicationCommandManager#load to load a tree from a folder.
     * @param values
     * @returns
     */
    public add(
        ...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]
    ): void {
        for (const value of values) {
            if (Array.isArray(value)) return this.add(...value)
            const resolved = this.resolve(value, null)
            this.commands.set(resolved.name, resolved)
        }
    }

    private loadOne(reqPath: string) {
        if (!reqPath.endsWith(".js")) return null
        delete require.cache[require.resolve(reqPath)]
        const req = require(reqPath)
        let value = req.default ?? req
        if (!value || !Object.keys(value).length) return null
        else if (Array.isArray(value)) throw new Error("Disallowed")
        return this.resolve(value, reqPath)
    }

    private validate(app: ApplicationCommand, path: string | null) {
        const json = app.toJSON()
        if (
            json.options?.some(
                (x) =>
                    x.type === ApplicationCommandOptionType.Subcommand ||
                    x.type === ApplicationCommandOptionType.SubcommandGroup
            )
        ) {
            throw new Error(
                `Attempted to define subcommand / subcommand group without using path tree definition. (${
                    path ?? "index file"
                })`
            )
        }
    }

    public resolve(value: ApplicationCommand | IApplicationCommandData, path: string | null) {
        const v = value instanceof ApplicationCommand ? value : new ApplicationCommand({ ...value, path })
        this.validate(v, path)
        return v
    }

    toJSON(type: Parameters<ApplicationCommand["mustRegisterAs"]>[0]): ApplicationCommandDataResolvable[] {
        const arr = new Array<ApplicationCommandDataResolvable>()

        // Helper function to read config.json
        const readConfig = (folderPath: string) => {
            const configPath = join(folderPath, "config.json")
            if (existsSync(configPath)) {
                try {
                    return JSON.parse(readFileSync(configPath, "utf-8"))
                } catch (err) {
                    throw new Error(`Error reading config.json in ${folderPath}: ${err}`)
                }
            }
            return null
        }

        for (const [commandName, value] of this.commands) {
            if (value instanceof ApplicationCommand) {
                if (!value.mustRegisterAs(type)) continue

                const folderPath = join(this.path, commandName)
                const config = readConfig(folderPath)

                const commandData = {
                    ...value.options.data,
                    ...(config ? config : {}),
                }

                arr.push(commandData)
            } else {
                const folderPath = join(this.path, commandName)
                const config = readConfig(folderPath)

                const json: RESTPostAPIChatInputApplicationCommandsJSONBody = {
                    ...config, // Apply config data if available
                    name: commandName,
                    description: config?.description || "none",
                    type: ApplicationCommandType.ChatInput,
                    options: [],
                }

                for (const [nextName, values] of value) {
                    if (values instanceof Collection) {
                        const subFolderPath = join(folderPath, nextName)
                        const subConfig = readConfig(subFolderPath)

                        // Apply only for subcommand groups
                        const raw: Partial<APIApplicationCommandOption> = {
                            ...subConfig, // Apply subcommand group config data
                            name: nextName,
                            description: subConfig?.description || "none",
                            type: ApplicationCommandOptionType.SubcommandGroup,
                            options: [],
                        }

                        // Only assign `options` if this is a SubcommandGroup
                        if (raw.type === ApplicationCommandOptionType.SubcommandGroup) {
                            (raw as APIApplicationCommandOption & { options: APIApplicationCommandSubcommandOption[] }).options = []

                            for (const [lastName, command] of values) {
                                if (!command.mustRegisterAs(type)) continue

                                const commandData = command.toJSON();
                                (raw as APIApplicationCommandOption & { options: APIApplicationCommandSubcommandOption[] }).options.push({
                                    ...commandData,
                                    name: lastName,
                                    type: ApplicationCommandOptionType.Subcommand,
                                } as APIApplicationCommandSubcommandOption)
                            }
                        }

                        // Only push `json.options` if it contains valid data
                        if ((raw as APIApplicationCommandOption & { options?: APIApplicationCommandSubcommandOption[] }).options?.length) {
                            json.options!.push(raw as APIApplicationCommandOption)
                        }
                    } else {
                        if (!values.mustRegisterAs(type)) continue

                        const subFolderPath = join(folderPath, nextName)
                        const subConfig = readConfig(subFolderPath)

                        // Add subcommand if available
                        const raw = values.toJSON()
                        json.options!.push({
                            ...raw,
                            ...subConfig, // Apply subcommand config data
                            type: ApplicationCommandOptionType.Subcommand,
                        } as APIApplicationCommandOption)
                    }
                }

                // Only push JSON if it contains valid options
                if (json.options?.length) {
                    arr.push(json)
                }
            }
        }

        return arr
    }

    public registerGlobal() {
        if (!this.commands.size) return
        this.client.events.load(NativeEventName, Events.InteractionCreate)
        return this.client.application.commands.set(this.toJSON(RegistrationType.Global))
    }

    public registerGuild(g: Guild) {
        if (!this.commands.size) return
        this.client.events.load(NativeEventName, Events.InteractionCreate)
        return g.commands.set(this.toJSON(RegistrationType.Guild))
    }
}