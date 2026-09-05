/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodAlertSystemMessageID",
    version: "1.2.0",
    description: "Returns the message sent by automod",
    unwrap: false,
    output: ArgType.Message,
    execute(ctx) {
        return this.success(ctx.automod?.alertSystemMessageId)
    },
})