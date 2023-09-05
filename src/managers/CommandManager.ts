import { Collection, Message } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import { Command, CommandType, ICommand } from "../structures/Command"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"

export class CommandManager {
    private readonly commands = new Collection<CommandType, Command[]>()
    private readonly paths = new Array<string>()

    public constructor(private readonly client: ForgeClient) {}

    public refresh() {
        for (const [ key, commands ] of this.commands) {
            // Unload the ones added thru folders
            const unloadable = commands.filter(x => !x.unloadable)
            
            // Keep unloadable
            this.commands.set(key, unloadable)
        }

        for (const p of this.paths) {
            for (const file of recursiveReaddirSync(p).filter(x => x.endsWith(".js"))) {
                // eslint-disable-next-line no-undef
                const path = `${process.cwd()}/${file}`
                const t = delete require.cache[require.resolve(path)]
            }

            // Reload these commands
            this.load(p)
        }
    }

    public load(path: string) {
        if (!this.paths.includes(path)) 
            this.paths.push(path)

        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            // eslint-disable-next-line no-undef
            const path = `${process.cwd()}/${file}`

            const req = require(path)
            if (!req) continue

            if (Array.isArray(req)) this.addPath(...req)
            else this.addPath(req.default ?? req)
        }
    }

    public get(type: CommandType, fn?: (cmd: Command) => boolean): Command[] {
        const cmds = this.commands.get(type) ?? []
        if (!fn) return cmds
        return cmds.filter(fn)
    }

    public add(...commands: (ICommand | Command)[]) {
        for (let i = 0, len = commands.length;i < len;i++) {
            const req = commands[i] 
            if (!req.type) continue
            
            const cmd = req instanceof Command ? req : new Command(req)
            
            const col = this.commands.ensure(cmd.type, () => new Array())
            col.push(cmd)

            if (this.client.autoAddEvents && !this.client.events.has(cmd.type)) this.client.events.load(cmd.type)
            else if (!this.client.autoAddEvents && !this.client.events.has(cmd.type)) console.warn(`Command ${cmd.name} is executed on ${cmd.type} event, but is not being listened to, add it under Client#events option.`) 
        }
    }

    private addPath(...commands: (ICommand | Command)[]) {
        for (let i = 0, len = commands.length;i < len;i++) {
            const req = commands[i] 
            const cmd = req instanceof Command ? req : new Command(req)
            
            const col = this.commands.ensure(cmd.type, () => new Array())
            cmd.unloadable = true
            col.push(cmd)

            if (this.client.autoAddEvents && !this.client.events.has(cmd.type)) this.client.events.load(cmd.type)
            else if (!this.client.autoAddEvents && !this.client.events.has(cmd.type)) console.warn(`Command ${cmd.name} is executed on ${cmd.type} event, but is not being listened to, add it under Client#events option.`) 
        }
    }
}