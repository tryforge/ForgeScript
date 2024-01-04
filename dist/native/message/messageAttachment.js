"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageAttachment",
    version: "1.4.0",
    output: structures_1.ArgType.URL,
    description: "Retrieves an attachment from this message",
    brackets: false,
    unwrap: true,
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
            description: "The message to get its attachments",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            description: "The index of the attachment",
            type: structures_1.ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [, message, index]) {
        return this.success((message ?? ctx.message)?.attachments.at(index)?.url);
    },
});
//# sourceMappingURL=messageAttachment.js.map