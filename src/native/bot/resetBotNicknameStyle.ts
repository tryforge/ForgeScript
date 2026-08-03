/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, Logger, NativeFunction } from "../../structures";
import { Routes } from "discord.js";

export default new NativeFunction({
    name: "$resetBotNicknameStyle",
    version: "2.7.0",
    description: "Resets the bot's display name style for the specified guild, returns bool",
    aliases: ["$resetClientNicknameStyle"],
    unwrap: true,
    brackets: false,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild whose bot display name style should be reset",
            rest: false,
            type: ArgType.Guild,
        },
    ],
    execute: async function (ctx, [guild]) {
        const res = await ctx.client.rest
            .patch(Routes.guildMember((guild || ctx.guild!).id), {
                body: {
                    display_name_font_id: null,
                    display_name_effect_id: null,
                    display_name_colors: null,
                }
            })
            .catch(e => Logger.error(e))

        return this.success(Boolean(res))
    }
})