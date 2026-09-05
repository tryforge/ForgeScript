/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerURL",
    version: "2.3.0",
    description: "Returns a sticker url",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull url of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.URL,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.url)
    },
})