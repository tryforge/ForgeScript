/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, ForgeError, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$try",
    version: "1.0.0",
    experimental: true,
    description: "Handles a possible error from given code",
    unwrap: false,
    args: [
        {
            name: "code",
            rest: false,
            type: ArgType.String,
            required: true,
            description: "The code to safely execute",
        },
        {
            name: "catch code",
            description: "The code to run in case of an error",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "Variable to load the error message to",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [tryCode, catchCode, varName] = this.data.fields! as IExtendedCompiledFunctionField[]

        const tryExecution: Return = await this["resolveCode"](ctx, tryCode).catch((e) => {
            if (!(e instanceof Error)) throw e
            return this.error(e)
        })

        if (tryExecution.error) {
            const value = tryExecution.value as ForgeError
            const name = await this["resolveCode"](ctx, varName)
            if (!this["isValidReturnType"](name)) return name
            if (name.value) ctx.setEnvironmentKey(name.value as string, value.message)

            return this["resolveCode"](ctx, catchCode)
        }

        if (!this["isValidReturnType"](tryExecution)) return tryExecution

        return this.success(tryExecution.value)
    },
})
