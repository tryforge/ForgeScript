import { readdirSync } from "fs"
import { ForgeClient } from "../core/ForgeClient"
import { ForgeFunction } from "../structures/ForgeFunction"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"

export class ForgeFunctionManager {
    private readonly functions = new Map<string, ForgeFunction>()
    
    public constructor(
        private readonly client: ForgeClient
    ) {

    }

    public add(...[ name, params, code ]: ConstructorParameters<typeof ForgeFunction>) {
        this.functions.set(
            name,
            new ForgeFunction(
                name,
                params,
                code
            )
        )
    }

    public get(name: string) {
        return this.functions.get(name)
    }

    public load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            const req = require(file).default as ForgeFunction | ConstructorParameters<typeof ForgeFunction>
            if (req instanceof ForgeFunction) {
                this.functions.set(req.name, req)
            } else this.add(...req)
        }
    }
}