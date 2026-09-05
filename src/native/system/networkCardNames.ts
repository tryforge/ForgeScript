/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { networkInterfaces } from "os"
import { ArgType, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$networkCardNames",
    version: "1.2.0",
    description: "Returns your network's card names",
    unwrap: true,
    output: array<ArgType.String>(),
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(Object.keys(networkInterfaces()).join(sep ?? ", "))
    }
})