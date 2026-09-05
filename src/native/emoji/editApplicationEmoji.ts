/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editApplicationEmoji",
    version: "1.5.0",
    description: "Edits an application emoji, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to edit",
            rest: false,
            required: true,
            type: ArgType.ApplicationEmoji,
        },
        {
            name: "name",
            description: "The new name for the emoji",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [emoji, name]) {
        return this.success(!!(await emoji.edit({ name: name }).catch(ctx.noop)))
    },
})