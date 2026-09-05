/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$guildLeave",
    version: "1.0.0",
    description: "Leaves a guild",
    brackets: false,
    aliases: [
        "$serverLeave"
    ],
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to leave",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
    ],
    unwrap: true,
    async execute(ctx, [g]) {
        g ??= ctx.guild!
        return this.success(!!(await g?.leave().catch(ctx.noop)))
    },
})
