import {
    APIApplicationCommandOption,
    APIApplicationCommandSubcommandOption,
    ApplicationCommandData,
    ApplicationCommandDataResolvable,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    Collection,
    CommandInteraction,
    ContextMenuCommandBuilder,
    Events,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    SlashCommandBuilder,
} from "discord.js"
import { ApplicationCommand } from "../structures/ApplicationCommand"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { ForgeClient } from "../core"
import { NativeEventName } from "./EventManager"
import { readdirSync, statSync } from "fs"
import { join } from "path"
import { cwd } from "process"

export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | RESTPostAPIChatInputApplicationCommandsJSONBody
    code: string
}

export class ApplicationCommandManager {
    /**
     * If:
     * - value is app command = slash command
     * - value is collection:
     *  - value is slash command = subcommands
     *  - value is collection = group with subcommands
     */
    private commands = new Collection<string, ApplicationCommand | Collection<string, ApplicationCommand | Collection<string, ApplicationCommand>>>()

    public constructor(public readonly client: ForgeClient) {}

    /**
     * PATH TREE MATTERS
     * @param path 
     */
    public load(path: string) {
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
                            if (stats.isDirectory()) throw new Error(`Disallowed folder found for slash command tree: ${thirdResolved}`)
                            const loaded = this.loadOne(`${cwd()}/${thirdResolved}`)
                            if (!loaded) continue
                            nextCol.set(loaded.name, loaded)
                        }

                        col.set(secondPath, nextCol)
                    } else {
                        const loaded = this.loadOne(`${cwd()}/${secondResolved}`)
                        if (!loaded) continue
                        col.set(loaded.name, loaded)
                    }
                }

                this.commands.set(mainPath, col)
            } else {
                const loaded = this.loadOne(`${cwd()}/${resolved}`)
                if (!loaded) continue
                this.commands.set(loaded.name, loaded)
            }
        }
    }

    public get(input: CommandInteraction): ApplicationCommand | null {
        const commandName = input.commandName
        if (!input.isChatInputCommand())
            return this.commands.get(commandName) as ApplicationCommand
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
            const resolved = this.resolve(value)
            this.commands.set(resolved.name, resolved)
        }
    }

    private loadOne(reqPath: string) {
        if (!reqPath.endsWith(".js")) return null
        const req = require(reqPath)
        let value = req.default ?? req
        if (!value || !Object.keys(value).length) return null
        else if (Array.isArray(value)) throw new Error("Disallowed")
        return this.resolve(value)
    }

    private validate(app: ApplicationCommand) {
        const json = app.toJSON()
        if (json.options?.some(x => x.type === ApplicationCommandOptionType.Subcommand || x.type === ApplicationCommandOptionType.SubcommandGroup)) {
            throw new Error(`Attempt to define subcommand / subcommand group without using path tree definition.`)
        }
    }

    public resolve(value: ApplicationCommand | IApplicationCommandData) {
        const v = value instanceof ApplicationCommand ? value : new ApplicationCommand(value)
        this.validate(v)
        return v
    }

    toJSON(): ApplicationCommandDataResolvable[] {
        const arr = new Array<ApplicationCommandDataResolvable>()
        
        for (const [ commandName, value ] of this.commands) {
            if (value instanceof ApplicationCommand) {
                arr.push(value.options.data)
            } else {
                const json: RESTPostAPIChatInputApplicationCommandsJSONBody = {
                    name: commandName,
                    description: "none",
                    type: ApplicationCommandType.ChatInput,
                    options: []
                }

                for (const [ nextName, values ] of value) {
                    if (values instanceof Collection) {
                        const raw: APIApplicationCommandOption = {
                            name: nextName,
                            description: "none",
                            type: ApplicationCommandOptionType.SubcommandGroup,
                            options: []
                        }

                        for (const [ lastName, command ] of values) {
                            raw.options!.push({
                                ...command.toJSON(),
                                name: lastName,
                                type: ApplicationCommandOptionType.Subcommand
                            } as APIApplicationCommandSubcommandOption)
                        }

                        json.options!.push(raw)
                    } else {
                        const raw = values.toJSON()
                        json.options!.push({
                            ...raw,
                            type: ApplicationCommandOptionType.Subcommand
                        } as APIApplicationCommandOption)
                    }
                }

                arr.push(json)
            }
        }

        return arr
    }

    public register() {
        if (this.commands.size) this.client.events.load(NativeEventName, Events.InteractionCreate)
        return this.client.application.commands.set(this.toJSON())
    }
}
