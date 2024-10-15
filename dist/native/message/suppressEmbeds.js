"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$suppressEmbeds",
    version: "1.5.0",
    description: "Suppresses embeds on a message, returns bool",
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
            description: "The message to suppress embeds on",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, message]) {
        return this.success(!!(await (message ?? ctx.message)?.suppressEmbeds(true).catch(ctx.noop)));
    },
});
//# sourceMappingURL=suppressEmbeds.js.map