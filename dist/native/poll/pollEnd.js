"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    aliases: [
        "$endPoll"
    ],
    name: "$pollEnd",
    version: "1.5.0",
    description: "Ends a poll",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get the message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to get the poll",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        }
    ],
    async execute(ctx, [, msg]) {
        const m = msg ?? ctx.message;
        return this.success(!!await m.poll?.end().catch(ctx.noop));
    },
});
//# sourceMappingURL=pollEnd.js.map