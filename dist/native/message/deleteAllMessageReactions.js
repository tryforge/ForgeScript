"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteAllMessageReactions",
    version: "1.0.0",
    description: "Deletes all reactions from a message, returns bool",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to remove reactions from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.reactions.removeAll().catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteAllMessageReactions.js.map