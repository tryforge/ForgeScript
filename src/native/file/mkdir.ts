/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { mkdirSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mkdir",
    version: "1.0.0",
    description: "Creates a directory",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path for the dir",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path]) {
        return this.success(void mkdirSync(path))
    },
})
