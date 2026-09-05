/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setStickerTags",
    version: "1.4.0",
    description: "Sets a sticker's tags, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to edit",
            rest: false,
            required: true,
            type: ArgType.Sticker
        },
        {
            name: "tags",
            description: "The new tags for the sticker",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ s, n ]) {
        return this.success(
            !!(await s.edit({
                tags: n.join(" "),
                reason: ctx.reason
            }).catch(ctx.noop))
        )
    },
})