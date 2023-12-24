"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelTags",
    version: "1.0.3",
    description: "Retrieves tags from a forum thread",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channeol to get tags of",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "separator",
            description: "The separator to use for every tag",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [ch, sep]) {
        const channel = (ch ?? ctx.channel);
        return this.success(channel?.appliedTags.join(sep || ", "));
    },
});
//# sourceMappingURL=channelTags.js.map