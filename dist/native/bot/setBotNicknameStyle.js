"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.NicknameEffects = exports.NicknameFonts = void 0;
const structures_1 = require("../../structures");
const enum_js_1 = require("../../functions/enum.js");
const discord_js_1 = require("discord.js");
var NicknameFonts;
(function (NicknameFonts) {
    NicknameFonts[NicknameFonts["Bangers"] = 1] = "Bangers";
    NicknameFonts[NicknameFonts["BioRhyme"] = 2] = "BioRhyme";
    NicknameFonts[NicknameFonts["CherryBomb"] = 3] = "CherryBomb";
    NicknameFonts[NicknameFonts["Chicle"] = 4] = "Chicle";
    NicknameFonts[NicknameFonts["Compagnon"] = 5] = "Compagnon";
    NicknameFonts[NicknameFonts["MuseoModerno"] = 6] = "MuseoModerno";
    NicknameFonts[NicknameFonts["NeoCastel"] = 7] = "NeoCastel";
    NicknameFonts[NicknameFonts["PixelifySans"] = 8] = "PixelifySans";
    NicknameFonts[NicknameFonts["Ribes"] = 9] = "Ribes";
    NicknameFonts[NicknameFonts["Sinistre"] = 10] = "Sinistre";
    NicknameFonts[NicknameFonts["Default"] = 11] = "Default";
    NicknameFonts[NicknameFonts["ZillaSlab"] = 12] = "ZillaSlab";
})(NicknameFonts || (exports.NicknameFonts = NicknameFonts = {}));
var NicknameEffects;
(function (NicknameEffects) {
    NicknameEffects[NicknameEffects["Solid"] = 1] = "Solid";
    NicknameEffects[NicknameEffects["Gradient"] = 2] = "Gradient";
    NicknameEffects[NicknameEffects["Neon"] = 3] = "Neon";
    NicknameEffects[NicknameEffects["Toon"] = 4] = "Toon";
    NicknameEffects[NicknameEffects["Pop"] = 5] = "Pop";
    NicknameEffects[NicknameEffects["Glow"] = 6] = "Glow";
})(NicknameEffects || (exports.NicknameEffects = NicknameEffects = {}));
exports.default = new structures_1.NativeFunction({
    name: "$setBotNicknameStyle",
    version: "2.7.0",
    description: "Sets the bot's display name style for a specific guild, returns bool",
    aliases: ["$setClientNicknameStyle"],
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild ID where the bot's display style should be applied",
            rest: false,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "font",
            description: "Font to use for the display name",
            required: true,
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: NicknameFonts,
        },
        {
            name: "effect",
            description: "Visual effect to use for the display name",
            required: true,
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: NicknameEffects,
        },
        {
            name: "colors",
            description: "One or more colors to apply to the display name",
            rest: true,
            type: structures_1.ArgType.Color,
        },
    ],
    async execute(ctx, [guild, font, effect, colors]) {
        const res = await ctx.client.rest
            .patch(discord_js_1.Routes.guildMember((guild || ctx.guild).id), {
            body: {
                display_name_font_id: (0, enum_js_1.resolveNumericEnum)(NicknameFonts, font),
                display_name_effect_id: (0, enum_js_1.resolveNumericEnum)(NicknameEffects, effect),
                display_name_colors: colors
            }
        })
            .catch((e) => structures_1.Logger.error(e));
        return this.success(Boolean(res));
    },
});
//# sourceMappingURL=setBotNicknameStyle.js.map