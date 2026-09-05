/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { setTimeout } from "timers/promises"
import { Logger } from "../structures"

async function main() {
    Logger.infoUpdate("Hello")
    await setTimeout(1000)
    Logger.warnUpdate("Yes")
    await setTimeout(1000)
    Logger.errorUpdate("Damn")
}

main()