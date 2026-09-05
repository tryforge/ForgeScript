/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { rmSync } from "fs"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteFile",
    version: "1.0.0",
    description: "Deletes a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        rmSync(path, { recursive: true })
        return this.success()
    },
})
