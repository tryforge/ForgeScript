/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ComponentType, ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"
import { addActionRow } from "../../functions/components"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Adds a new container component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "color",
            description: "The color to set",
            rest: false,
            type: ArgType.Color,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        ctx.container.components.push(new ContainerBuilder())
        ctx.container.inside.push(ComponentType.Container)
        const comp = ctx.container.components.at(-1) as ContainerBuilder

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1, 2)
        if (!this["isValidReturnType"](rt)) return rt
        const [ color, spoiler ] = args

        comp.setAccentColor(color || undefined)
        comp.setSpoiler(spoiler || false)

        addActionRow(ctx)
        ctx.container.inside.pop()
        return this.success()
    },
})