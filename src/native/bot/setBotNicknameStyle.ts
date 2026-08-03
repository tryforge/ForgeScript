/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, Logger, NativeFunction } from "../../structures"
import { resolveNumericEnum } from "../../functions/enum.js"
import { Routes } from "discord.js"

export enum NicknameFonts {
    Bangers = 1,
    BioRhyme = 2,
    CherryBomb = 3,
    Chicle = 4,
    Compagnon = 5,
    MuseoModerno = 6,
    NeoCastel = 7,
    PixelifySans = 8,
    Ribes = 9,
    Sinistre = 10,
    Default = 11,
    ZillaSlab = 12,
}

export enum NicknameEffects {
    Solid = 1,
    Gradient = 2,
    Neon = 3,
    Toon = 4,
    Pop = 5,
    Glow = 6,
}


export default new NativeFunction({
    name: "$setBotNicknameStyle",
    version: "2.7.0",
    description: "Sets the bot's display name style for a specific guild, returns bool",
    aliases: ["$setClientNicknameStyle"],
    unwrap: true,
    brackets: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild ID where the bot's display style should be applied",
            rest: false,
            type: ArgType.Guild,
        },
        {
            name: "font",
            description: "Font to use for the display name",
            required: true,
            rest: false,
            type: ArgType.Enum,
            enum: NicknameFonts,
        },
        {
            name: "effect",
            description: "Visual effect to use for the display name",
            required: true,
            rest: false,
            type: ArgType.Enum,
            enum: NicknameEffects,
        },
        {
            name: "colors",
            description: "One or more colors to apply to the display name",
            rest: true,
            type: ArgType.Color,
        },
    ],
    async execute(ctx, [guild, font, effect, colors]) {
        const res = await ctx.client.rest
            .patch(Routes.guildMember((guild || ctx.guild!).id), {
                body: {
                    display_name_font_id: resolveNumericEnum(NicknameFonts, font),
                    display_name_effect_id: resolveNumericEnum(NicknameEffects, effect),
                    display_name_colors: colors
                }
            })
            .catch((e) => Logger.error(e))

        return this.success(Boolean(res))
    },
})