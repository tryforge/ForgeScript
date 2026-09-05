/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botUserAuthorizationCount",
    version: "2.4.0",
    aliases: ["$clientUserAuthorizationCount"],
    description: "Returns the user authorization count of the bot",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.application.approximateUserAuthorizationCount)
    },
})