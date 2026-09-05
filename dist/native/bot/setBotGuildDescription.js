"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotGuildDescription",
    version: "2.6.0",
    description: "Sets the bot description on a guild",
    aliases: [
        "$setBotGuildBio",
        "$setClientGuildBio",
        "$setClientGuildDescription"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to set description on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "description",
            description: "The new description",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, bio]) {
        return this.success(!!(await guild.members.editMe({ bio }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotGuildDescription.js.map