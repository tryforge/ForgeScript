/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"
import { addActionRow } from "../../functions/components"
import { ComponentType, ContainerBuilder, MediaGalleryBuilder } from "discord.js"

export default new NativeFunction({
    name: "$addMediaGallery",
    version: "2.4.0",
    description: "Adds a new media gallery component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "items",
            description: "The media items to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        ctx.component.gallery = new MediaGalleryBuilder()

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addMediaGalleryComponents(ctx.component.gallery)
        else ctx.container.components.push(ctx.component.gallery)

        delete ctx.component.gallery
        return this.success()
    },
})