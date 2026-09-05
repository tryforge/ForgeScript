/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$stickerPackID",
    version: "1.4.0",
    description: "Returns a sticker's pack id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull pack of",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    output: ArgType.String,
    execute(ctx, [ s ]) {
        s ??= ctx.sticker!
        return this.success(s?.packId)
    },
})