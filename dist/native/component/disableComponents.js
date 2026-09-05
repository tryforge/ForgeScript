"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableComponents",
    version: "2.2.0",
    description: "Disables all components on the current message",
    aliases: ["$disableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components;
        ctx.container.actionRow?.components.forEach((x) => x.setDisabled(true));
        for (let comp of components) {
            if (!(comp instanceof discord_js_1.ActionRowBuilder))
                continue;
            const actionRow = new discord_js_1.ActionRowBuilder();
            comp?.components.forEach((x) => actionRow.addComponents(x.setDisabled(true)));
        }
        return this.success();
    },
});
//# sourceMappingURL=disableComponents.js.map