/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$httpGetHeader",
    version: "1.5.0",
    description: "Gets an HTTP header",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.String,
    execute(ctx, [name]) {
        return this.success(ctx.http.response?.headers?.get(name))
    },
})