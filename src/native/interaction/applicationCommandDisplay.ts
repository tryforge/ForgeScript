/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$applicationCommandDisplay",
    version: "1.4.0",
    description: "Gets the full command interaction with all options",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "hide option name",
            description: "Whether to suppress option names from being displayed",
            rest: false,
            required: true,
            type: ArgType.Boolean
        }
    ],
    output: ArgType.String,
    execute(ctx, [ suppress ]) {
        suppress ??= false
        return this.success(ctx.client.applicationCommands.getDisplay(ctx.interaction, suppress))
    },
})