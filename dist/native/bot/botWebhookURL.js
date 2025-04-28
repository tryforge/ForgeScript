"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botWebhookURL",
    version: "2.2.0",
    description: "Returns the client webhook event url",
    unwrap: false,
    aliases: ["$clientWebhookURL"],
    output: structures_1.ArgType.URL,
    execute(ctx) {
        return this.success(ctx.client.application.eventWebhooksURL);
    },
});
//# sourceMappingURL=botWebhookURL.js.map