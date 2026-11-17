/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction } from "../../structures"
import { InviteProperties, InviteProperty } from "../../properties/invite"

export default new NativeFunction({
    name: "$getInvite",
    version: "2.2.0",
    description: "Returns information about an invite",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite,
        },
        {
            name: "property",
            description: "The property of the invite to return",
            rest: false,
            type: ArgType.Enum,
            enum: InviteProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String
        }
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [invite, prop, sep]) {
        if (prop) return this.success(InviteProperties[prop](invite, sep))
        return this.successJSON(invite)
    },
})