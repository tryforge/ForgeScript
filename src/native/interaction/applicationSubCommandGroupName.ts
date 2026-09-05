/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$applicationSubCommandGroupName",
    version: "1.5.0",
    description: "Returns the application sub command group name of this interaction",
    unwrap: false,
    output: ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction && "options" in ctx.interaction && "getSubcommandGroup" in ctx.interaction.options ? ctx.interaction.options.getSubcommandGroup(false) : undefined)
    },
})