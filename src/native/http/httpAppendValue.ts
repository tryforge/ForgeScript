/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$httpAppendValue",
    version: "1.4.0",
    description: "Appends a key-value to form data",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name to add this value to",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "value",
            type: ArgType.String,
            rest: false,
            required: true,
            description: "The value to set"
        }
    ],
    execute(ctx, [ key, val ]) {
        ctx.http.form?.append(key, val)
        return this.success()        
    },
})