/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { extname } from "path"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$pathExtensionName",
    version: "2.7.0",
    description: "Returns the extension name of a path",
    aliases: ["$pathExtName"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to get extension name from",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.String,
    execute(ctx, [p]) {
        return this.success(extname(p))
    },
})