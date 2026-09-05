/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { APIInteractionGuildMember, CDN, GuildMember } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$memberAvatarDecoration",
    version: "2.4.0",
    description: "Returns the member's avatar decoration",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The user to get its avatar decoration",
            pointer: 0,
            rest: false,
            type: ArgType.Member,
            required: true,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [, user]) {
        const member = user ?? ctx.member ?? ctx.interaction?.member
        let decor

        if (member instanceof GuildMember) {
            decor = member.avatarDecorationData ?? member.user?.avatarDecorationData
        } else {
            const memb = member as APIInteractionGuildMember
            decor = memb.avatar_decoration_data ?? memb.user?.avatar_decoration_data
        }

        return this.success(decor ? new CDN().avatarDecoration(decor.asset) : null)
    },
})