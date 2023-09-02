import { readdirSync } from "fs"
import { ArgType, INativeFunction, NativeFunction } from "../structures/NativeFunction"
import { IRawFunction } from "../core/Compiler"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"

export class FunctionManager {
    private static readonly Functions = new Map<string, NativeFunction>()

    public static async load(path: string) {
        for (const file of recursiveReaddirSync(path).filter(x => x.endsWith(".js"))) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const req = require(file).default as NativeFunction
            this.Functions.set(req.name, req)
        }
    }

    public static get(name: string) {
        return this.Functions.get(name)!
    }

    public static toJSON(): INativeFunction<any>[] {
        return Array.from(this.Functions.values()).map(x => {
            const data = JSON.parse(JSON.stringify(x.data)) as INativeFunction<any>
            
            data.args?.map(x => {
                x.type = ArgType[x.type]
                if (x.enum) x.enum = Object.keys(x.enum).filter(x => isNaN(Number(x)))
            })

            return data
        })
    }
    
    public static get raw(): IRawFunction[] {
        return Array.from(this.Functions).map(
            x => {
                const [ name, { data }] = x
                return {
                    name,
                    args: data.brackets === undefined ? null : {
                        required: data.brackets,
                        fields: data.args!.map(x => ({
                            condition: x.condition,
                            rest: x.rest
                        }))
                    }
                }
            }
        )
    }
}

// eslint-disable-next-line no-undef
FunctionManager.load(`${__dirname}/../native`)