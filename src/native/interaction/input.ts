/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ComponentType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$input",
    version: "1.0.0",
    description: "Returns the value from a modal field",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to get its field value",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    execute(ctx, [id, sep]) {
        if (!ctx.interaction?.isModalSubmit()) return this.success()
        const field = ctx.interaction.fields.getField(id)

        return this.success(
            "value" in field
                ? field.value
                : ("attachments" in field && field.type === ComponentType.FileUpload)
                    ? field.attachments.map((x) => x.url).join(sep ?? ", ")
                    : field.values.join(sep ?? ", ")
        )
    },
})
