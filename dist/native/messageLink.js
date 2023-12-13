"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageLink",
    version: "1.0.0",
    description: "Retrieves a message url",
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
            description: "The message to get its url",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, message]) {
        const msg = message ?? ctx.message;
        return this.success(msg?.url);
    },
});
//# sourceMappingURL=messageLink.js.map