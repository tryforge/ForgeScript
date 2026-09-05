/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$escapeCode",
    version: "1.4.0",
    description: "Code inside this function will not be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$esc"
    ],
    args: [
        {
            name: "code",
            description: "The code to ignore",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    output: ArgType.String,
    execute(ctx) {
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        return this.success(code.rawValue)
    },
})