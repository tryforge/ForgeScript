import { readdirSync } from "fs"
import { NativeFunction } from "../structures/NativeFunction"
import { IRawFunction } from "../core/Compiler"

export class FunctionManager {
    private static readonly Functions = new Map<string, NativeFunction>()

    public static load(path: string) {
        for (const file of readdirSync(path, { recursive: true, withFileTypes: true }).filter(x => x.name.endsWith(".js"))) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const req = require(`${file.path}/${file.name}`).default as NativeFunction
            this.Functions.set(req.name, req)
        }
    }

    public static get(name: string) {
        return this.Functions.get(name)!
    }
    
    public static get raw(): IRawFunction[] {
        return Array.from(this.Functions).map(
            x => {
                const [ name, { data }] = x
                return {
                    name,
                    fields: data.brackets
                }
            }
        )
    }
}

// eslint-disable-next-line no-undef
FunctionManager.load(`${__dirname}/../native`)