"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadOwnerID",
    version: "2.2.0",
    description: "Returns the owner of the thread",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Member,
    args: [
        {
            name: "channel ID",
            description: "The thread to retrieve owner of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = (channel ?? ctx.channel);
        return this.success(thread.ownerId || undefined);
    },
});
//# sourceMappingURL=threadOwnerID.js.map