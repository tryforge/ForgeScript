/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IArg, INativeFunction, NativeFunction } from "../structures/@internal/NativeFunction"
import { IRawFunction, Compiler } from "../core"
import recursiveReaddirSync from "../functions/recursiveReaddirSync"
import { deserialize, serialize } from "v8"
import { Logger } from "../structures/@internal/Logger"
import { enumToArray } from "../functions/enum"
import { join } from "path"

export type RecursiveArray<T> = T | T[]
export type AnyNativeFunction = NativeFunction<any, any, any>

export class FunctionManager {
    private static readonly Functions = new Map<string, AnyNativeFunction>()

    public static loadNative() {
        FunctionManager.load("ForgeScript", join(__dirname, "..", "native"))
    }

    public static load(provider: string, path: string): void
    public static load(path: string): void
    public static load(provider: string, path?: string) {
        // Backwards compatibility
        if (!path) return this.load("Unknown", provider)

        const overrideAttempts = new Array<string>()
        const loader = new Array<AnyNativeFunction>()

        for (const file of recursiveReaddirSync(path).filter((x) => x.endsWith(".js"))) {
            const req = require(file).default as AnyNativeFunction
            req.path = file

            if (this.Functions.has(req.name)) {
                overrideAttempts.push(req.name)
                continue
            }

            if (!req.data.args?.length)
                req.data.unwrap = false

            loader.push(req)
        }

        this.addMany(loader)

        if (overrideAttempts.length !== 0)
            Logger.warn(`${provider} | Attempted to override the following ${overrideAttempts.length} functions: ${overrideAttempts.join(", ")}`)
    }

    public static addMany(...fns: RecursiveArray<AnyNativeFunction>[]): void {
        for (let i = 0, len = fns.length; i < len; i++) {
            const fn = fns[i]
            if (Array.isArray(fn)) this.addMany(...fn)
            else this.Functions.set(fn.name, fn)
        }
        this.reload()
    }

    public static add(fn: AnyNativeFunction) {
        return this.addMany(fn)
    }

    public static reload() {
        Compiler["setFunctions"](this.raw)
    }

    public static get(name: string) {
        return this.Functions.get(name)!
    }

    public static toJSON(): INativeFunction<any, any, any>[] {
        return Array.from(this.Functions.values()).map((x) => {
            const d = { ...x.data }
            d.args?.forEach((x) => Reflect.deleteProperty(x, "check"))
            Reflect.deleteProperty(d, "execute")
            const data = deserialize(new Uint8Array(serialize(d))) as INativeFunction<any, any, any>

            data.args?.map((x) => {
                x.type = ArgType[x.type]
                if (x.enum) x.enum = enumToArray(x.enum)
            })

            return data
        })
    }

    public static get raw(): IRawFunction[] {
        return Array.from(this.Functions).map((x) => {
            const [name, { data }] = x
            return {
                aliases: data.aliases ?? null,
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
