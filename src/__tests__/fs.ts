/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { FileReader } from "../core/FileReader"

console.log(
    new FileReader(
        `[name]

Ping

[type]

messageCreate

[code]
ping is $ping
`,
        {}
    ).read()
)
