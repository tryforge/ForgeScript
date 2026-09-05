/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteStickers",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    output: ArgType.Number,
    description: "Deletes given stickers, returns the count of stickers deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete stickers from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "stickers",
            description: "The stickers to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [g, stickers]) {
        let count = 0
        for (let i = 0, len = stickers.length; i < len; i++) {
            const sticker = stickers[i]
            const success = await g.stickers.delete(sticker, ctx.reason).then(x => true).catch(ctx.noop)
            if (success) count++
        }

        return this.success(count)
    },
})
