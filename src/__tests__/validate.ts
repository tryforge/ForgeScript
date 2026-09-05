/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { FunctionManager } from "../managers"
import { ArgType } from "../structures"
import { Logger } from "../structures/@internal/Logger"

FunctionManager.load("Validator", __dirname + "/../native")

for (const [, fn] of FunctionManager["Functions"]) {
    if (fn.data.args?.length) {
        for (const arg of fn.data.args) {
            if (
                arg.pointer === undefined &&
                [ArgType.Role, ArgType.Member, ArgType.Message, ArgType.GuildEmoji].includes(
                    arg.type
                )
            ) {
                Logger.error(`${arg.name} requires pointer for function ${fn.name}`)
            }
        }
    }
}
