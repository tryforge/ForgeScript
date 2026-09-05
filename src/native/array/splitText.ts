/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$splitText",
    version: "1.2.0",
    description: "Gets element of textSplit",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to get split at",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ index ]) {
        return this.success(
            ctx.getEnvironmentInstance(Array, SplitTextName)?.[index]
        )
    },
})