/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ModalBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$modal",
    version: "1.0.0",
    description: "Creates a modal",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this modal",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "title",
            description: "The title for the modal",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [id, title]) {
        if (ctx.interaction) ctx.container.modal = new ModalBuilder().setCustomId(id).setTitle(title)

        return this.success()
    },
})