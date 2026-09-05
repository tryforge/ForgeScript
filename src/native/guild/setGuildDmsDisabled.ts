/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildDmsDisabled",
    version: "2.6.0",
    description: "Sets the guild's DMs activity disabled for a specific duration, returns bool",
    aliases: ["$setServerDmsDisabled"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to disable DMs for",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "duration",
            description: "The duration for disabling DMs, omit to enable DMs again",
            rest: false,
            type: ArgType.Time,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, ms]) {
        return this.success((await guild.setIncidentActions({
            dmsDisabledUntil: ms ? Date.now() + ms : null,
            invitesDisabledUntil: guild.incidentsData?.invitesDisabledUntil
        }).catch(() => false)) !== false)
    },
})