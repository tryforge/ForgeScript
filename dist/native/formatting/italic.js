"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItalicEscapeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.ItalicEscapeRegex = /([*_])/gim;
exports.default = new structures_1.NativeFunction({
    name: "$italic",
    version: "1.5.0",
    brackets: true,
    description: "Makes given text italic",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make italic, this will attempt to escape all _ and *",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [str]) {
        return this.success((0, discord_js_1.italic)(str.replace(exports.ItalicEscapeRegex, "\\$1")));
    },
});
//# sourceMappingURL=italic.js.map