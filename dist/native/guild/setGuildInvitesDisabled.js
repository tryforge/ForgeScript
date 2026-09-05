"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "duration",
            description: "The duration for disabling invites, omit to enable invites again",
            rest: false,
            type: structures_1.ArgType.Time,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, ms]) {
        return this.success((await guild.setIncidentActions({
            invitesDisabledUntil: ms ? Date.now() + ms : null,
            dmsDisabledUntil: guild.incidentsData?.dmsDisabledUntil
        }).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildInvitesDisabled.js.map