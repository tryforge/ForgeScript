"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        (0, components_1.addActionRow)(ctx, false);
        ctx.container.actionRow = new discord_js_1.ActionRowBuilder();
        return this.success();
    },
});
//# sourceMappingURL=addActionRow.js.map