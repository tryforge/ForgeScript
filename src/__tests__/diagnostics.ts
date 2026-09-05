/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { subscribe, channel } from "node:diagnostics_channel"

const ch = channel("messaging")

subscribe(ch.name, msg => {
    console.log(msg)
})

ch.publish({ data: true })