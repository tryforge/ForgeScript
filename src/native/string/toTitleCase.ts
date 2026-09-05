/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import lodash from "lodash"

export default new NativeFunction({
    name: "$toTitleCase",
    version: "1.0.6",
    description: "Converts a string to title case",
    brackets: true,
    output: ArgType.String,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn title case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(
            m
                .split(/ +/)
                .map((x) => lodash.capitalize(x))
                .join(" ")
        )
    },
})
