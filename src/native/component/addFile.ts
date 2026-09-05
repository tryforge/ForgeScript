/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ComponentType, ContainerBuilder, FileBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { addActionRow } from "../../functions/components"

export default new NativeFunction({
    name: "$addFile",
    version: "2.4.0",
    description: "Adds a new file component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url of the file (must use attachment://)",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [url, spoiler]) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        const file = new FileBuilder().setURL(url).setSpoiler(!!spoiler)

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addFileComponents(file)
        else ctx.container.components.push(file)

        return this.success()
    },
})