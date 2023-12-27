import { Collection, Message } from "discord.js"
import { ForgeClient } from "../core/ForgeClient"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { FileReader } from "../core/FileReader"
import { BaseCommand, IBaseCommand, Logger } from "../structures"
import { cwd } from "process"
import { join } from "path"

export abstract class BaseCommandManager<T> {
    private readonly commands = new Collection<T, BaseCommand<T>[]>()
    private readonly paths = new Array<string>()

    public abstract handlerName: string

    public constructor(private readonly client: ForgeClient) {}

    public refresh() {
        for (const [key, commands] of this.commands) {
            // Unload the ones added thru folders
            const unloadable = commands.filter((x) => !x.data.unloadable)

            // Keep unloadable
            this.commands.set(key, unloadable)
        }

        for (const p of this.paths) {
            for (const file of recursiveReaddirSync(p).filter((x) => x.endsWith(".js") || x.endsWith)) {
                // eslint-disable-next-line no-undef
                const path = join(cwd(), file)
                delete require.cache[require.resolve(path)]
            }

            // Reload these commands
            this.load(p)
        }
    }

    public load(path: string) {
        if (!this.paths.includes(path)) this.paths.push(path)

        for (const file of recursiveReaddirSync(path).filter((x) => x.endsWith(".js") || x.endsWith(".fs"))) {
            // eslint-disable-next-line no-undef
            const path = join(cwd(), file)

            const req = FileReader.read(file, path)
            if (!req) continue
            
            if (Array.isArray(req)) this.addPath(true, path, ...req)
            else this.addPath(true, path, req)
        }
    }

    public get(type: T, fn?: (cmd: BaseCommand<T>) => boolean): BaseCommand<T>[] {
        const cmds = this.commands.get(type) ?? []
        if (!fn) return cmds
        return cmds.filter(fn)
    }

    public add(...commands: (IBaseCommand<T> | BaseCommand<T>)[]) {
        this.addPath(false, undefined, ...commands)
    }

    private addPath(unloadable: boolean, path?: string, ...commands: (IBaseCommand<T> | BaseCommand<T>)[]) {
        for (let i = 0, len = commands.length; i < len; i++) {
            const req = commands[i]
            const cmd = req instanceof BaseCommand ? req : new BaseCommand({ ...req, path })
            if (path)
                cmd.setPath(path)

            cmd.validate()
            
            if (this.handlerName && !this.client.events.has(this.handlerName, cmd.type)) {
                Logger.warn(`Command is using the following listener: ${cmd.type} but the client is not listening to it. (${cmd.data.path ?? "index file"})`)
            }

            const col = this.commands.ensure(cmd.type as T, () => new Array())
            cmd.data.unloadable = unloadable

            col.push(cmd)
        }
    }
}
