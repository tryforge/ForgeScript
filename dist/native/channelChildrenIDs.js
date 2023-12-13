"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelChildrenIDs",
    version: "1.0.3",
    description: "Returns the children ids this category has",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The category to get its children",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory,
        },
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [channel, sep]) {
        return this.success((channel ?? ctx.channel)?.children?.cache.map((x) => x.id).join(sep || ", "));
    },
});
//# sourceMappingURL=channelChildrenIDs.js.map