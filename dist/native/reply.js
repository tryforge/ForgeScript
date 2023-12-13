"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reply",
    version: "1.0.0",
    description: "Marks the response as a reply",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is at",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to reply to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
    ],
    execute(ctx, [, message]) {
        ctx.container.reference = (message ?? ctx.message)?.id;
        return this.success();
    },
});
//# sourceMappingURL=reply.js.map