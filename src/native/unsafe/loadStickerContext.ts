/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$loadStickerContext",
    version: "1.4.0",
    aliases: [
        "$useStickerContext",
        "$asStickerContext"
    ],
    brackets: true,
    description: "Loads a sticker instance to the current context, this is not reversible and is adviced to use with $scope",
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to adapt context with",
            rest: false,
            required: true,
            type: ArgType.Sticker
        }
    ],
    execute(ctx, [ s ]) {
        ctx.obj = s
        return this.success()
    },
})