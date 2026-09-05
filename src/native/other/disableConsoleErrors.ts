/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$disableConsoleErrors",
    version: "1.4.0",
    description: "Disables possible outcoming errors that are output to console",
    unwrap: false,
    execute(ctx) {
        ctx.runtime.disableConsoleErrors = true
        return this.success()
    },
})