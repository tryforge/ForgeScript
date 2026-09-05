/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$checkContains",
    version: "1.0.0",
    aliases: [
        "$includes"
    ],
    output: ArgType.Boolean,
    description: "Checks whether a string contains a set of other strings",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to check on",
            required: true,
            rest: false,
            type: ArgType.String,
        },
        {
            name: "matches",
            description: "The list of strings to try match",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [text, matches]) {
        return this.success(matches.some((x) => text.includes(x)))
    },
})
