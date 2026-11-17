/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import isTrue from "../../functions/isTrue"
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$arrayFindIndex",
    version: "1.0.0",
    description: "Finds the index of a first found element in the array",
    unwrap: false,
    output: ArgType.Number,
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
    experimental: true,
    brackets: true,
    async execute(ctx) {
        const code = this.data.fields![2] as IExtendedCompiledFunctionConditionField

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1)
        if (!this["isValidReturnType"](rt)) return rt
        const [name, varName] = args

        const arr = ctx.getEnvironmentKey(name)

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = await this["resolveCondition"](ctx, code)

                if (rt.return || rt.success) {
                    if (!isTrue(rt)) continue
                    return this.success(i)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return this.success(-1)
    },
})