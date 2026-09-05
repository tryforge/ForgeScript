"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookExists",
    version: "1.0.0",
    description: "Checks whether given webhook id exists",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook id to check for",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && (await ctx.client.fetchWebhook(id).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=webhookExists.js.map