"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadStarterMessageID",
    version: "1.5.0",
    description: "Returns the id of the message that started this thread",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to get its starter message id",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    output: structures_1.ArgType.Message,
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel);
        if (!thread.isThread())
            return this.success();
        const message = await thread.fetchStarterMessage().catch(ctx.noop);
        return this.success(message?.id);
    },
});
//# sourceMappingURL=threadStarterMessageID.js.map