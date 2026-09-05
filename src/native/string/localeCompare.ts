/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$localeCompare",
    version: "2.7.0",
    description: "Compares two strings, returns their relative order",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "first",
            description: "The first string to compare",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "second",
            description: "The second string to compare against first string",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Number,
    execute(ctx, [a, b]) {
        return this.success(a.localeCompare(b))
    },
})