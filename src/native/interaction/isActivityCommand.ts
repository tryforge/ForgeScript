/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isActivityCommand",
    version: "2.4.0",
    description: "Returns whether the interaction is an activity command",
    unwrap: false,
    output: ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isPrimaryEntryPointCommand()))
    },
})