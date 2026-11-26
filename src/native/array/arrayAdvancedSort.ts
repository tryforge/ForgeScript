/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$arrayAdvancedSort",
    version: "1.4.0",
    description: "Advanced array sort",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "var1",
            description: "The $env variable 1 to hold x value",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "var2",
            description: "The $env variable 2 to hold y value",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "code",
            description: "Optional code to use for sorting, previous 2 vars must have been given",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Json,
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 2, 4)
        if (!this["isValidReturnType"](rt)) return rt
        const [mainVar, var1, var2, otherVar] = args

        const arr = ctx.getEnvironmentInstance(Array, mainVar)

        if (arr != null) {
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    ctx.setEnvironmentKey(var1, arr[i])
                    ctx.setEnvironmentKey(var2, arr[j])
                    const exec = await this["resolveUnhandledArg"](ctx, 3)
                    if (!exec.return && !this["isValidReturnType"](exec)) return exec
                    if (Number(exec.value) > 0) [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }

            if (otherVar) {
                ctx.setEnvironmentKey(otherVar, arr)
            } else {
                return this.successJSON(arr)
            }
        }

        return this.success()
    },
})