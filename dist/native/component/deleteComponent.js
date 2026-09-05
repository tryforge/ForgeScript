"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteComponent",
    version: "1.0.0",
    description: "Deletes a message component with given custom id",
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The component's custom id to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [id]) {
        const row = ctx.container.actionRow;
        const n = row?.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === id);
        if (n != -1) {
            if (row?.components.length === 1)
                delete ctx.container.actionRow;
            else
                ctx.container.actionRow?.components.splice(n, 1);
        }
        for (let i = 0, len = ctx.container.components.length; i < len; i++) {
            const comp = ctx.container.components[i];
            if (!(comp instanceof discord_js_1.ActionRowBuilder))
                continue;
            const index = comp.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === id);
            if (index !== -1) {
                if (comp.components.length === 1)
                    ctx.container.components.splice(i, 1);
                else
                    comp.components.splice(index, 1);
                break;
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=deleteComponent.js.map