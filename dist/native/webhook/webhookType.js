"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookType",
    version: "2.3.0",
    description: "Returns the type of a webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "webhook ID",
            description: "The webhook to pull data from",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: discord_js_1.WebhookType,
    execute(ctx, [web]) {
        return this.success(discord_js_1.WebhookType[web.type]);
    },
});
//# sourceMappingURL=webhookType.js.map