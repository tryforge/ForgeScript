/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { mkdtempSync } from "fs"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$mktdir",
    version: "1.4.0",
    description: "Creates a temporary directory",
    unwrap: true,
    brackets: true,
    aliases: [
        "$makeTempDir",
        "$createTempDir"
    ],
    output: ArgType.String,
    args: [
        {
            name: "prefix",
            description: "The prefix for the temp dir",
            rest: false,
            required: true,
            type: ArgType.String,
        }
    ],
    execute(ctx, [prefix]) {
        return this.success(mkdtempSync(prefix))
    },
})
