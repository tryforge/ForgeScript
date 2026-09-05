/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import isTrue from "../../functions/isTrue"
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$arrayFindLast",
    version: "2.7.0",
    description: "Finds the value of a last found element in the array",
    unwrap: false,
    brackets: true,
    experimental: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            condition: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    async execute(ctx) {
        const code = this.data.fields![2] as IExtendedCompiledFunctionConditionField

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1)
        if (!this["isValidReturnType"](rt)) return rt
        const [ name, varName ] = args

        const arr = ctx.getEnvironmentKey(name)
        if (!Array.isArray(arr)) return this.success()

        for (let i = arr.length - 1; i >= 0; i--) {
            const el = arr[i]
            ctx.setEnvironmentKey(varName, el)
            const rt = await this["resolveCondition"](ctx, code)

            if (rt.return || rt.success) {
                if (!isTrue(rt)) continue
                return this.successJSON(el)
            } else if (!this["isValidReturnType"](rt)) return rt
        }

        return this.success()
    },
})