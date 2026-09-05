"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoldEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.BoldEscapeRegex = /(\*)/gim;
exports.default = new structures_1.NativeFunction({
    name: "$bold",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text bold",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make bold, this will attempt to escape all *",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.bold)(str.replace(exports.BoldEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=bold.js.map