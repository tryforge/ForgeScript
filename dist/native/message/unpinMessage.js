"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unpinMessage",
    version: "1.1.0",
    output: structures_1.ArgType.Boolean,
    description: "Unpins a message from a channel, returns bool",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to unpin",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message
        }
    ],
    async execute(ctx, [, m]) {
        const msg = m ?? ctx.message;
        return this.success(!!(await msg.unpin().catch(ctx.noop)));
    },
});
//# sourceMappingURL=unpinMessage.js.map