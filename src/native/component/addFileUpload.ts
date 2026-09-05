/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { FileUploadBuilder } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$addFileUpload",
    version: "2.6.0",
    description: "Adds a new file upload component to the newest modal label",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this field",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "min values",
            description: "The min values of file uploads",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max values",
            description: "The max values of file uploads",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "required",
            description: "Whether this field is required",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [id, min, max, required]) {
        const field = new FileUploadBuilder()
            .setCustomId(id)
            .setRequired(required || false)

        if (min) field.setMinValues(min)
        if (max) field.setMaxValues(max)

        ctx.component.label?.setFileUploadComponent(field)

        return this.success()
    },
})