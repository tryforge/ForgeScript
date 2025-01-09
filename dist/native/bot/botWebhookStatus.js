"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botWebhookStatus",
    version: "2.2.0",
    description: "Returns the client webhook event status",
    unwrap: false,
    aliases: ["$clientWebhookStatus"],
    output: discord_js_1.ApplicationWebhookEventStatus,
    execute(ctx) {
        const status = ctx.client.application.eventWebhooksStatus;
        return this.success(status ? discord_js_1.ApplicationWebhookEventStatus[status] : null);
    },
});
//# sourceMappingURL=botWebhookStatus.js.map