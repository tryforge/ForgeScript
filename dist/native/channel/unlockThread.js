"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unlockThread",
    version: "1.5.0",
    aliases: ["$unlockPost"],
    description: "Unlocks a thread, returns bool",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to unlock",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to unlock this thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = (channel ?? ctx.channel);
        if (!thread.isThread())
            return this.success(false);
        const success = await thread.setLocked(false, reason || undefined).catch(ctx.noop);
        return this.success(!!success);
    },
});
//# sourceMappingURL=unlockThread.js.map