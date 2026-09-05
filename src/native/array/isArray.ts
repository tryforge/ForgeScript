/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$isArray",
    version: "2.7.0",
    description: "Checks whether given array is valid",
    aliases: ["$isValidArray"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "array",
            description: "The array to check for",
            rest: false,
            required: true,
            type: ArgType.Json,
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ arr ]) {
        return this.success(Array.isArray(arr))
    },
})