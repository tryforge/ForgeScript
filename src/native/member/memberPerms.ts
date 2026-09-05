/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { PermissionFlagsBits, PermissionsBitField } from "discord.js"
import array from "../../functions/array"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberPerms",
    version: "1.0.0",
    description: "Returns the member perms",
    brackets: false,
    unwrap: true,
    output: array(PermissionFlagsBits),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to return its perms",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every perm",
            type: ArgType.String,
            required: false,
            rest: false,
        },
        {
            name: "return int",
            description: "Whether to return the perms as bitfield int",
            type: ArgType.Boolean,
            rest: false,
        },
    ],
    execute(ctx, [, user, sep, int]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        const perms = new PermissionsBitField(member?.permissions)
        return this.success(int ? perms.bitfield : perms.toArray().join(sep ?? ", "))
    },
})