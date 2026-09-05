/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import array from "../../functions/array"
import { ArgType, NativeFunction } from "../../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$splitTextJoin",
    version: "1.4.0",
    description: "Joins all elements from array with given separator",
    unwrap: true,
    aliases: ["$textSplitJoin"],
    output: array<ArgType.Unknown>(),
    args: [
        {
            name: "separator",
            description: "The separator to use for every element",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [sep]) {
        const arr = ctx.getEnvironmentInstance(Array, SplitTextName)
        return this.success(arr?.join(sep))
    },
})
