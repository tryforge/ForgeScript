/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bufferAllocUnsafe",
    version: "1.1.0",
    description: "Unsafely allocates given number of bytes in a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable to load it to, accessed with $env[<name>]",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "bytes",
            description: "The number of bytes to alloc",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ name, bytes ]) {
        return this.success(void ctx.setEnvironmentKey(name, Buffer.allocUnsafe(bytes)))
    },
})