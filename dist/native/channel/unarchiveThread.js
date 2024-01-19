"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unarchiveThread",
    version: "1.0.0",
    description: "Unarchives a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to unarchive",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "reason",
            description: "The reason to unarchive this thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [channel, reason]) {
        const thread = channel;
        const success = await thread.setArchived(false, reason || undefined).catch(ctx.noop);
        return this.success(!!success);
    },
});
//# sourceMappingURL=unarchiveThread.js.map