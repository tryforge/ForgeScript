"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$threadIsArchived",
    aliases: [
        "$isArchived",
        "$threadArchived"
    ],
    description: "Archives a thread, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The thread to check if its archived",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        }
    ],
    async execute(ctx, [channel]) {
        const thread = channel;
        return this.success(!!thread.archived);
    },
});
//# sourceMappingURL=threadIsArchived.js.map