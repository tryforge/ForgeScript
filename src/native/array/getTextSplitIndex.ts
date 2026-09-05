/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$getTextSplitIndex",
    version: "2.5.0",
    description: "Gets the index of a textSplit element",
    aliases: ["$getSplitTextIndex"],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "element",
            description: "The element to get index of",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ element ]) {
        return this.success(
            ctx.getEnvironmentInstance(Array, SplitTextName)?.indexOf(element)
        )
    },
})