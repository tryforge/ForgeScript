/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction } from "../../structures"
import isTrue from "../../functions/isTrue"

export default new NativeFunction({
    name: "$arrayFilter",
    version: "2.7.0",
    description: "Filters through every element of the array and loads the results to another array",
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
            required: true,
            condition: true,
            type: ArgType.String,
        },
        {
            name: "other variable",
            description: "The other variable to load the result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Json,
    async execute(ctx) {
        const code = this.data.fields![2] as IExtendedCompiledFunctionConditionField

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3)
        if (!this["isValidReturnType"](rt)) return rt
        const [name, varName, otherVarName] = args

        const arr = ctx.getEnvironmentKey(name)
        const newArr = new Array<unknown>()

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = await this["resolveCondition"](ctx, code)

                if (rt.return || rt.success) {
                    if (!isTrue(rt)) continue
                    newArr.push(el)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return otherVarName ?
            this.success(void ctx.setEnvironmentKey(otherVarName, newArr)) :
            this.successJSON(newArr)
    },
})