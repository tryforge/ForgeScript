"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageWebhookID",
    version: "1.1.0",
    description: "Returns the message's webhook id",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its webhook id",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        }
    ],
    output: structures_1.ArgType.Webhook,
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.webhookId);
    },
});
//# sourceMappingURL=messageWebhookID.js.map