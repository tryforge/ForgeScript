/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { camelCase } from "lodash"

export default new NativeFunction({
    name: "$toCamelCase",
    version: "1.0.6",
    description: "Converts a string to camel case",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn camel case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(camelCase(m))
    },
})
