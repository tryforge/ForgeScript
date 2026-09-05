"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$defer",
    version: "1.0.0",
    description: "Defers this interaction",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && ctx.interaction.isRepliable()) {
            await ctx.interaction.deferReply({
                flags: ctx.container.ephemeral ? discord_js_1.MessageFlags.Ephemeral : undefined
            });
        }
        return this.success();
    },
});
//# sourceMappingURL=defer.js.map