import { readdirSync } from "fs"
import { ForgeClient } from "../core/ForgeClient"
import { ForgeFunction, IForgeFunction } from "../structures/forge/ForgeFunction"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { FunctionManager, RecursiveArray } from "./FunctionManager"

export class ForgeFunctionManager {
    private readonly functions = new Map<string, ForgeFunction>()

    public constructor(private readonly client: ForgeClient) {}

    public add(...options: RecursiveArray<IForgeFunction | ForgeFunction>[]) {
        for (let i = 0, len = options.length;i < len;i++) {
            const option = options[i]
            if (Array.isArray(option))
                this.add(...option)
            else {
                const opt = this.resolve(option)
                this.functions.set(opt.data.name, opt)
            }
        }
        this.populate()
    }

    public resolve(s: IForgeFunction | ForgeFunction) {
        return s instanceof ForgeFunction ? s : new ForgeFunction(s)
    }

    public populate() {
        FunctionManager.addMany(Array.from(this.functions.values()).map(x => x.asNative()))
    }

    public get(name: string) {
        return this.functions.get(name)
    }

    public load(path: string) {
        const loader = new Array<IForgeFunction | ForgeFunction>()
        for (const file of recursiveReaddirSync(path).filter((x) => x.endsWith(".js"))) {
            const data = require(file)
            if (Object.keys(data).length === 0)
                continue
            
            const req = (data.default ?? data) as ForgeFunction | IForgeFunction
            loader.push(req)
        }
        this.add(loader)
    }
}
