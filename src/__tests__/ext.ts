/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { join } from "node:path"
import { ForgeClient } from "../core/ForgeClient"
import { BaseCommandManager } from "../managers"
import { ForgeExtension } from "../structures/forge/ForgeExtension"

export class RndManager extends BaseCommandManager<{}> {
    public handlerName = "cope"
}

// Just a ext test
export class MyExtension extends ForgeExtension {
    public description: string = "Some description"
    public name: string = "UwU"
    public version: string = "1.0.0"

    public random!: RndManager

    public init(client: ForgeClient): void {
        this.load(join(__dirname, "custom"))
        this.random = new RndManager(client)
    }
}
