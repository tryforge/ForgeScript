/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { InviteProperties, InviteProperty } from "../../properties/invite"
import { ArgType, NativeFunction } from "../../structures"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$guildInvites",
    version: "2.5.0",
    description: "Returns all invites of a guild",
    aliases: [
        "$serverInvites"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: ArgType.Guild,
            description: "The guild to pull invites from"
        },
        {
            name: "property",
            rest: false,
            type: ArgType.Enum,
            description: "The property of the invites to return",
            enum: InviteProperty
        },
        {
            name: "separator",
            rest: false,
            type: ArgType.String,
            description: "The separator to use for each property"
        }
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [ guild, prop, sep ]) {
        const invites = await (guild ?? ctx.guild)?.invites.fetch().catch(ctx.noop)
        if (invites && prop) return this.success(invites.map((x) => InviteProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(invites)
    },
})