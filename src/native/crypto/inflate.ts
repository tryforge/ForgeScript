/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { inflateSync } from "zlib"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$inflate",
    version: "1.2.0",
    description: "Decompresses given input",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "input",
            description: "The text to decompress",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The input encoding to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ input, enc ]) {
        return this.success(inflateSync(new Uint8Array(Buffer.from(input, (enc ?? "hex") as BufferEncoding))).toString("utf-8"))
    },
})