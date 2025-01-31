"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchMessage",
    version: "2.2.0",
    description: "Fetches all data of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to fetch its data",
            rest: false,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
    ],
    async execute(ctx, [, message]) {
        await (message ?? ctx.message)?.fetch();
        return this.success();
    },
});
//# sourceMappingURL=fetchMessage.js.map