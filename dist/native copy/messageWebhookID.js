"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageWebhookID",
    version: "1.1.0",
    description: "Returns the message's webhook id",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.webhookId);
    },
});
//# sourceMappingURL=messageWebhookID.js.map