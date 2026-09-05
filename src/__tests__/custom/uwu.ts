/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { NativeFunction } from "../../structures/@internal/NativeFunction"
import { Return } from "../../structures/@internal/Return"

export default new NativeFunction({
    name: "$uwu",
    description: "A uwu function that overrides $guildName",
    unwrap: true,
    execute(ctx) {
        return this.success("uwu!")
    },
})
