import { ApplicationCommandData, Collection, CommandInteraction, ContextMenuCommandBuilder, SlashCommandBuilder } from "discord.js"
import { ApplicationCommand } from "../structures/ApplicationCommand"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { ForgeClient } from "../core"

export interface IApplicationCommandData {
    data: SlashCommandBuilder | ContextMenuCommandBuilder | ApplicationCommandData
    code: string
}

export class ApplicationCommandManager {
    private commands = new Collection<string, ApplicationCommand>()

    public constructor(public readonly client: ForgeClient) {}

    public load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            // eslint-disable-next-line no-undef
            const req = this.loadOne(`${process.cwd()}/${file}`)
            if (!req) continue
            this.add(req)
        }
    }

    public get(input: CommandInteraction) {
        return this.commands.get(input.commandName) ?? null
    }

    public add(...values: (ApplicationCommand | IApplicationCommandData | ApplicationCommand[] | IApplicationCommandData[])[]): void {
        for (const value of values) {
            if (Array.isArray(value)) return this.add(...value)
            const resolved = this.resolve(value)
            this.commands.set(resolved.name, resolved)
        }
    }

    private loadOne(reqPath: string) {
        const req = require(reqPath)
        let value = req.default ?? req
        if (!value || !Object.keys(value).length) return null
        else if (Array.isArray(value)) return value.map(this.resolve.bind(this))
        return this.resolve(value)
    }

    public resolve(value: ApplicationCommand | IApplicationCommandData) {
        return value instanceof ApplicationCommand ? value : new ApplicationCommand(value)
    }

    public register() {
        return this.client.application.commands.set(this.commands.map(x => x.options.data))
    }
}