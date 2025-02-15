"use strict";
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
            name: "id",
            description: "The webhook id",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: discord_js_1.WebhookType,
    async execute(ctx, [web]) {
        return this.success(discord_js_1.WebhookType[web.type]);
    },
});
//# sourceMappingURL=webhookType.js.map