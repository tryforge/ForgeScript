/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteDM",
    version: "2.7.0",
    description: "Deletes the DM channel between the client and a user",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user whose DM channel should be deleted",
            rest: false,
            type: ArgType.User,
            required: true,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [user]) {
        return this.success(!!(await user.deleteDM().catch(ctx.noop)))
    },
})
