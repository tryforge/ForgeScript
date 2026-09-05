/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$editSticker",
    version: "1.4.0",
    description: "Edits a sticker on a guild, returns bool",
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
            name: "name",
            description: "The new name for the sticker",
            rest: false,
            type: ArgType.String
        },
        {
            name: "description",
            description: "The new description for the sticker",
            rest: false,
            type: ArgType.String
        },
        {
            name: "tags",
            description: "The new tags for the sticker",
            rest: true,
            type: ArgType.String
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ s, name, desc, tags ]) {
        return this.success(
            !!(await s.edit({
                name: name || undefined,
                description: desc || undefined,
                tags: tags.join(" ") || undefined,
                reason: ctx.reason
            }).catch(ctx.noop))
        )
    },
})