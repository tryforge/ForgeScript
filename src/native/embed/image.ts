/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$image",
    version: "1.0.0",
    description: "Adds an embed image",
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The url for the embed image",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [image, index]) {
        ctx.container.embed(index ?? 0).setImage(image || null)
        return this.success()
    },
})
