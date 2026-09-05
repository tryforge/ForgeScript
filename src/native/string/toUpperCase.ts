/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$toUpperCase",
    version: "1.0.0",
    description: "Makes a string uppercase",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "string",
            description: "The string to turn uppercase",
            type: ArgType.String,
            rest: true,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [values]) {
        return this.success(values.join(";").toUpperCase())
    },
})
