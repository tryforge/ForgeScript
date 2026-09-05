/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Context, Logger } from "../structures"

export default function(this: Context, ...args: any[]) {
    if (this.hasDisabledConsoleErrors()) {
        return
    } 

    Logger.error(...args)
}