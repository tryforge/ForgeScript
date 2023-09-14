"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$startTyping",
    version: "1.0.0",
    description: "Starts typing in a channel",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to start typing at",
            required: true,
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        }
    ],
    async execute(ctx, [ch]) {
        const channel = ch ?? ctx.channel;
        return structures_1.Return.success(!!(channel.isTextBased() ? await channel.sendTyping().catch(() => null) : undefined));
    },
});
//# sourceMappingURL=startTyping.js.map