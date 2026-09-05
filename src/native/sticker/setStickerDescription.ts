/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$setStickerDescription",
    version: "1.4.0",
    description: "Sets a sticker's description, returns bool",
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
            name: "description",
            description: "The new description for the sticker",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ s, n ]) {
        return this.success(
            !!(await s.edit({
                description: n,
                reason: ctx.reason
            }).catch(ctx.noop))
        )
    },
})