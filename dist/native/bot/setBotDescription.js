"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotDescription",
    version: "1.5.0",
    description: "Sets the bot description",
    aliases: [
        "$setClientDescription"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "description",
            description: "The new description",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [desc]) {
        return this.success(!!(await ctx.client.application.edit({ description: desc }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotDescription.js.map