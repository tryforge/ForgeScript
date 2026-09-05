/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { truncateSync } from "fs"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$truncateFile",
    version: "1.0.0",
    description: "Truncates text in a file to given length",
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
        {
            name: "length",
            description: "The new length for the file",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [path, data]) {
        truncateSync(path, data)
        return this.success()
    },
})
