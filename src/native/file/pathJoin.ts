/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { join } from "path"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pathJoin",
    version: "2.2.0",
    description: "Joins paths together",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "paths",
            description: "The paths to join with",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [paths]) {
        return this.success(join(...paths))
    },
})