"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setBotBanner",
    version: "1.5.0",
    description: "Sets the bot banner",
    brackets: true,
    unwrap: true,
    aliases: [
        "$setClientBanner"
    ],
    args: [
        {
            name: "url",
            description: "The banner url",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [url]) {
        return this.success(!!(await ctx.client.user.setBanner(url).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setBotBanner.js.map