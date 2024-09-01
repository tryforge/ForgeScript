"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setChannelCategory",
    version: "1.5.0",
    aliases: ["$setChannelParent"],
    description: "Sets a channel's category, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its category",
            rest: false,
            check: (i) => "setParent" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "category ID",
            description: "The category to set",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory
        },
    ],
    async execute(ctx, [channel, parent]) {
        return this.success(!!(await channel.setParent(parent || null).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setChannelCategory.js.map