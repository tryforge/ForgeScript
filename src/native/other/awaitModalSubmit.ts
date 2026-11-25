/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"
import isTrue from "../../functions/isTrue"

export default new NativeFunction({
    name: "$awaitModalSubmit",
    version: "1.4.0",
    description: "Awaits a modal submit, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The modal's custom id to wait for",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "success code",
            description: "The code to execute on success, this is called with interaction context",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: ArgType.Time,
            description: "The max time to wait for a component"
        },
        {
            name: "filter",
            description: "The filter to run for every interaction received after this, this is called with interaction context",
            rest: false,
            required: false,
            condition: true,
            type: ArgType.String
        },
    ],
    async execute(ctx) {
        if (!ctx.interaction || !("awaitModalSubmit" in ctx.interaction))
            return this.success(false)

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2)
        if (!this["isValidReturnType"](rt)) return rt
        const [id, time] = args

        const int = await ctx.interaction.awaitModalSubmit({
            time,
            filter: async (i) => {
                if (i.customId !== id) return false
                if (!this.hasField(3)) return true
                const res = await this["resolveCondition"](
                    ctx.clone({ obj: i }),
                    this.data.fields![3] as IExtendedCompiledFunctionConditionField
                ).catch(ctx.noop)
                if (res?.error) ctx.noop(res.value)
                if (res?.return || res?.success) {
                    return isTrue(res)
                } else return false
            }
        }).catch(ctx.noop)

        if (int) {
            const rt = await this["resolveCode"](
                ctx.clone({ obj: int }),
                this.data.fields![1] as IExtendedCompiledFunctionField
            )
            if (!this["isValidReturnType"](rt))
                return rt
        }

        return this.success(!!int)
    },
})