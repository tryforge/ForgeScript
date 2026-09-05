/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { generateAdvancedBar, generateBar } from "../functions/generateBar"

console.log(
    generateAdvancedBar(
        100,
        100,
        10,
        [
            "=",
            "~",
            "#"
        ]
    )
)