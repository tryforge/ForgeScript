"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableButtons",
    version: "2.2.0",
    description: "Disables all buttons on the current message",
    aliases: ["$disableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components;
        const components = Number.isFinite(index) ? new Array(data[index]) : data;
        ctx.container.actionRow?.components.forEach((x) => {
            if (x instanceof discord_js_1.ButtonBuilder)
                x.setDisabled(true);
        });
        for (let i = 0, len = components.length; i < len; i++) {
            const row = components[i];
            if (!(row instanceof discord_js_1.ActionRowBuilder))
                continue;
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach((x) => {
                if (x instanceof discord_js_1.ButtonBuilder)
                    actionRow.addComponents(x.setDisabled(true));
            });
        }
        return this.success();
    },
});
//# sourceMappingURL=disableButtons.js.map