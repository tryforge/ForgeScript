"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    code: "ok! $applicationCommandDisplay",
    data: {
        name: "sure",
        description: "bye",
        options: [
            {
                name: "hi",
                description: "tmr",
                type: discord_js_1.ApplicationCommandOptionType.String,
                required: false
            }
        ]
    }
};
//# sourceMappingURL=bye.js.map