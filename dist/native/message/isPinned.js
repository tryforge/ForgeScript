"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isPinned",
    version: "1.5.0",
    description: "Returns whether the message is pinned",
    aliases: [
        "$isMessagePinned",
        "$messagePinned"
    ],
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
            description: "The message to check if its pinned",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [, message]) {
        return this.success((message ?? ctx.message)?.pinned ?? false);
    },
});
//# sourceMappingURL=isPinned.js.map