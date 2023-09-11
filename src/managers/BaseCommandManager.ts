import { Collection, Message } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { FileReader } from "../core/FileReader"
import { BaseCommand, IBaseCommand } from "../structures"

export class BaseCommandManager<T> {
    private readonly commands = new Collection<T, BaseCommand<T>[]>()
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
            for (const file of recursiveReaddirSync(p).filter(x => x.endsWith(".js") || x.endsWith)) {
                // eslint-disable-next-line no-undef
                const path = `${process.cwd()}/${file}`
                delete require.cache[require.resolve(path)]
            }

            // Reload these commands
            this.load(p)
        }
    }

    public load(path: string) {
        if (!this.paths.includes(path)) 
            this.paths.push(path)

        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js") || x.endsWith(".fs"))) {
            // eslint-disable-next-line no-undef
            const path = `${process.cwd()}/${file}`

            const req = FileReader.read(file, path)
            if (!req) continue
            
            if (Array.isArray(req)) this.addPath(...req)
            else this.addPath(req)
        }
    }

    public get(type: T, fn?: (cmd: BaseCommand<T>) => boolean): BaseCommand<T>[] {
        const cmds = this.commands.get(type) ?? []
        if (!fn) return cmds
        return cmds.filter(fn)
    }

    public add(...commands: (IBaseCommand<T> | BaseCommand<T>)[]) {
        for (let i = 0, len = commands.length;i < len;i++) {
            const req = commands[i] 
            if (!req.type) continue
            
            const cmd = req instanceof BaseCommand ? req : new BaseCommand(req)
            
            const col = this.commands.ensure(cmd.type as T, () => new Array())
            col.push(cmd)
        }
    }

    private addPath(...commands: (IBaseCommand<T> | BaseCommand<T>)[]) {
        for (let i = 0, len = commands.length;i < len;i++) {
            const req = commands[i] 
            const cmd = req instanceof BaseCommand ? req : new BaseCommand(req)
            
            const col = this.commands.ensure(cmd.type as T, () => new Array())
            cmd.unloadable = true
            col.push(cmd)
        }
    }
}