/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botUserInstallCount",
    version: "1.5.0",
    aliases: ["$clientUserInstallCount"],
    description: "Returns the user install count of the bot",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.application.approximateUserInstallCount)
    },
})