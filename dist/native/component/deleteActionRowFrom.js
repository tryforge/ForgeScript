"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteActionRowFrom",
    version: "1.5.0",
    description: "Deletes an action row or top level component at given index",
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to remove row from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    output: structures_1.ArgType.Boolean,
    unwrap: true,
    async execute(ctx, [, m, index]) {
        const components = m.components.map(x => (0, discord_js_1.createComponentBuilder)(x.toJSON()));
        components.splice(index, 1);
        return this.success(!!(await m.edit({ components: components.map(x => x.toJSON()) }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteActionRowFrom.js.map