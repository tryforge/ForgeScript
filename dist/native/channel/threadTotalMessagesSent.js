"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadTotalMessagesSent",
    version: "1.5.0",
    description: "Returns the total count of sent messages in a thread",
    aliases: [
        "$threadTotalMessagesCount"
    ],
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel);
        return this.success(thread.totalMessageSent ?? 0);
    },
});
//# sourceMappingURL=threadTotalMessagesSent.js.map