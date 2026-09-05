/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { execSync } from "child_process"
import { Logger } from "../structures"

export async function customImport<V>(pkg: string): Promise<V> {
    return import(pkg).catch(async () => {
        Logger.info(`Package ${pkg} not found; Installing...`)
        execSync(`npm i ${pkg}`)
        return customImport(pkg)
    })
}