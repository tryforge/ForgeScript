"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$djsVersion",
    version: "2.2.0",
    description: "Returns the discord.js version used",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(discord_js_1.version);
    }
});
//# sourceMappingURL=djsVersion.js.map