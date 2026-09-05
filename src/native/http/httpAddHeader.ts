/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpAddHeader",
    version: "1.0.0",
    description: "Adds an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "value",
            description: "The header value",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, values]) {
        const value = values.join(";")
        if (!ctx.http.headers) ctx.http.headers = {}
        ctx.http.headers[name] = value
        return this.success()
    },
})
