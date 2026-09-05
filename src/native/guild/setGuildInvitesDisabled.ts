/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildInvitesDisabled",
    version: "2.6.0",
    description: "Sets the guild's invites disabled for a specific duration, returns bool",
    aliases: ["$setServerInvitesDisabled"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to disable invites for",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "duration",
            description: "The duration for disabling invites, omit to enable invites again",
            rest: false,
            type: ArgType.Time,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, ms]) {
        return this.success((await guild.setIncidentActions({
            invitesDisabledUntil: ms ? Date.now() + ms : null,
            dmsDisabledUntil: guild.incidentsData?.dmsDisabledUntil
        }).catch(() => false)) !== false)
    },
})