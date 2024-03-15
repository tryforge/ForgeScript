"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelIsChildrenOf",
    version: "1.5.0",
    aliases: [
        "$isChildrenOf"
    ],
    description: "Checks whether given channel is a children of a category",
    output: structures_1.ArgType.Boolean,
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to know if is children of category",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true
        },
        {
            name: "category ID",
            description: "The category to check against",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory
        }
    ],
    execute(ctx, [ch, cat]) {
        return this.success(cat.children.cache.has(ch.id));
    },
});
//# sourceMappingURL=channelIsChildrenOf.js.map