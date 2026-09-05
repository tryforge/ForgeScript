/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { statSync } from "fs"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isDirectory",
    version: "1.4.0",
    description: "Checks whether a path is a directory",
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "path",
            description: "The path to file or directory",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        try {
            return this.success(statSync(path).isDirectory())
        } catch {
            return this.success(false)
        }
    },
})