/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createInvite",
    version: "1.1.0",
    brackets: true,
    description: "Creates an invite, returns the invite code",
    unwrap: true,
    output: ArgType.Invite,
    args: [
        {
            name: "channel ID",
            description: "The channel to make the invite for",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => "createInvite" in i,
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "max age",
            description: "The max age for this invite",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating this invite",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ch, maxUses, maxAge, reason]) {
        const channel = (ch ?? ctx.channel) as TextChannel
        const invite = await channel
            .createInvite({
                reason: reason || ctx.reason,
                maxUses: maxUses || undefined,
                maxAge: typeof(maxAge) === "number" ? maxAge : undefined,
                unique: true
            })
            .catch(ctx.noop)
        return this.success(invite ? invite.code : undefined)
    },
})