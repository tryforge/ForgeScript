/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { TimeParser } from "../../constants"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$parseString",
    version: "1.0.2",
    description: "Parses valid duration string to ms",
    brackets: true,
    output: ArgType.Number,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [ str ]) {
        try {
            return this.success(TimeParser.parseToMS(str))
        } catch (error) {
            return this.success(0)
        }
    },
})
