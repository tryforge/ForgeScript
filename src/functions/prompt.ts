/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { stdin, stdout } from "process"
import { createInterface } from "readline"

export default async function(q: string) {
    const itf = createInterface(stdin, stdout)
    return new Promise<string>(r => {
        itf.question(q, input => {
            itf.close()
            r(input)
        })
    })
}