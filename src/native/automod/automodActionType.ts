/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$automodActionType",
    version: "1.2.0",
    description: "Returns the action type automod used",
    unwrap: false,
    output: AutoModerationActionType,
    execute(ctx) {
        const type = ctx.automod?.action.type
        return this.success(type ? AutoModerationActionType[type] : null)
    },
})