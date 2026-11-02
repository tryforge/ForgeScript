/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { FileUploadBuilder, FileUploadType } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { getLastComponent } from "../../functions/components"

export default new NativeFunction({
    name: "$addFileType",
    version: "2.9.0",
    aliases: ["$addFileTypes"],
    description: "Adds allowed file types to the last file upload",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The file types to add, e.g. audio, image, video, .pdf",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [types]) {
        const upload = getLastComponent(ctx)
        if (upload instanceof FileUploadBuilder) upload.addFileTypes(types as FileUploadType[])
        return this.success()
    },
})
