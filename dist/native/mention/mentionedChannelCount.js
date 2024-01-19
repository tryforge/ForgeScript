"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentionedChannelCount",
    aliases: [
        "$mentionedChannelsCount"
    ],
    output: structures_1.ArgType.Number,
    version: "1.3.0",
    description: "Returns the mentioned channel count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.channels.size);
    },
});
//# sourceMappingURL=mentionedChannelCount.js.map