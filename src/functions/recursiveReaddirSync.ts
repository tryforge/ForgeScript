/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Dirent, lstatSync, readdirSync } from "fs"
import { join } from "path"

export default function recursiveReaddirSync(path: string): string[] {
    const arr = new Array<string>()

    for (const file of readdirSync(path)) {
        const p = join(path, file)
        const stats = lstatSync(p)
        if (stats.isDirectory()) {
            arr.push(...recursiveReaddirSync(p))
        } else {
            arr.push(p)
        }
    }

    return arr
}
