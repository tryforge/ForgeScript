/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$deleteInvite",
    version: "1.0.0",
    brackets: true,
    description: "Deletes an invite, returns bool",
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite,
        },
        {
            name: "reason",
            description: "The reason for deleting the invite",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [invite, reason]) {
        return this.success(!!(await invite.delete(reason || ctx.reason).catch(ctx.noop)))
    },
})