/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { resolve } from "path"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pathResolve",
    version: "2.2.0",
    description: "Resolves paths into an absolute path",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to resolve",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(resolve(...paths))
    },
})