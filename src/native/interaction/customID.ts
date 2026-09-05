/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$customID",
    version: "1.0.0",
    description: "Retrieves the custom id of the interaction",
    unwrap: true,
    output: ArgType.String,
    execute: async function (ctx) {
        return this.success(ctx.interaction && "customId" in ctx.interaction ? ctx.interaction.customId : undefined)
    },
})
