/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"
import { addActionRow } from "../../functions/components"
import { ComponentType, ContainerBuilder, SectionBuilder } from "discord.js"

export default new NativeFunction({
    name: "$addSection",
    version: "2.4.0",
    description: "Adds a new section component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components and accessory to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        ctx.component.section = new SectionBuilder()
        ctx.container.inside.push(ComponentType.Section)

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addSectionComponents(ctx.component.section)
        else ctx.container.components.push(ctx.component.section)

        delete ctx.component.section
        ctx.container.inside.pop()
        return this.success()
    },
})