"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether the given user can be DMed",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "user",
            description: "The user to test DMs",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user;
        return this.success(!!(await user?.send("").catch((err) => (err instanceof discord_js_1.DiscordAPIError && Number(err.code) === 50006))));
    },
});
//# sourceMappingURL=isUserDMEnabled.js.map