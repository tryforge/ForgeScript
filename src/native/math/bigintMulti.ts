/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bigintMulti",
    version: "1.3.0",
    description: "Multiplies multiple numbers",
    brackets: true,
    unwrap: true,
    output: ArgType.BigInt,
    args: [
        {
            name: "numbers",
            description: "Numbers to multiply",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(ctx, [numbers]) {
        return this.success(numbers.reduce((x, y) => x * y))
    },
})
