"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageReferenceID",
    version: "1.0.0",
    description: "Returns the message id that this message replies to",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its reference",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, message]) {
        const msg = message ?? ctx.message;
        return this.success(msg?.reference?.messageId);
    },
});
//# sourceMappingURL=messageReferenceID.js.map