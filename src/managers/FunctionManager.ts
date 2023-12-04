import { readdirSync } from "fs"
import { ArgType, INativeFunction, NativeFunction } from "../structures/NativeFunction"
import { IRawFunction } from "../core/Compiler"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { deserialize, serialize } from "v8"

export class FunctionManager {
    private static readonly Functions = new Map<string, NativeFunction>()

    public static loadNative() {    
        // eslint-disable-next-line no-undef
        FunctionManager.load(`${__dirname}/../native`)
    }

    public static async load(path: string) {
        for (const file of recursiveReaddirSync(path).filter((x) => x.endsWith(".js"))) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const req = require(file).default as NativeFunction
            if (this.Functions.has(req.name)) continue
            this.Functions.set(req.name, req)
        }
    }

    public static get(name: string) {
        return this.Functions.get(name)!
    }

    public static toJSON(): INativeFunction<any>[] {
        return Array.from(this.Functions.values()).map((x) => {
            const d = { ...x.data }
            d.args?.forEach((x) => Reflect.deleteProperty(x, "check"))
            Reflect.deleteProperty(d, "execute")
            const data = deserialize(serialize(d)) as INativeFunction<any>

            data.args?.map((x) => {
                x.type = ArgType[x.type]
                if (x.enum) x.enum = Object.keys(x.enum).filter((x) => isNaN(Number(x)))
            })

            return data
        })
    }

    public static get raw(): IRawFunction[] {
        return Array.from(this.Functions).map((x) => {
            const [name, { data }] = x
            return {
                name,
                args:
                    data.brackets === undefined
                        ? null
                        : {
                            required: data.brackets,
                            fields: data.args!.map((x) => ({
                                condition: x.condition,
                                rest: x.rest,
                            })),
                        },
            }
        })
    }
}
