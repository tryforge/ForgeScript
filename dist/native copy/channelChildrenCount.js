"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelChildrenCount",
    version: "1.0.3",
    description: "Returns the amount of children this category has",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its child count",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory,
        },
    ],
    execute(ctx, [channel]) {
        return this.success((channel ?? ctx.channel)?.children?.cache.size);
    },
});
//# sourceMappingURL=channelChildrenCount.js.map