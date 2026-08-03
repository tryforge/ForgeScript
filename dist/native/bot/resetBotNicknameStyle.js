"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$resetBotNicknameStyle",
    version: "2.7.0",
    description: "Resets the bot's display name style for the specified guild, returns bool",
    aliases: ["$resetClientNicknameStyle"],
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild whose bot display name style should be reset",
            rest: false,
            type: structures_1.ArgType.Guild,
        },
    ],
    execute: async function (ctx, [guild]) {
        const res = await ctx.client.rest
            .patch(discord_js_1.Routes.guildMember((guild || ctx.guild).id), {
            body: {
                display_name_font_id: null,
                display_name_effect_id: null,
                display_name_colors: null,
            }
        })
            .catch(e => structures_1.Logger.error(e));
        return this.success(Boolean(res));
    }
});
//# sourceMappingURL=resetBotNicknameStyle.js.map