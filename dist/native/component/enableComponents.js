"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableComponents",
    version: "2.2.0",
    description: "Enables all components on the current message",
    aliases: ["$enableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components;
        ctx.container.actionRow?.components.forEach((x) => x.setDisabled(false));
        for (let comp of components) {
            if (!(comp instanceof discord_js_1.ActionRowBuilder))
                continue;
            const actionRow = new discord_js_1.ActionRowBuilder();
            comp?.components.forEach((x) => actionRow.addComponents(x.setDisabled(false)));
        }
        return this.success();
    },
});
//# sourceMappingURL=enableComponents.js.map