"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomGuildChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channel from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "type",
            description: "The channel types to get an id from",
            type: structures_1.ArgType.Enum,
            rest: true,
            required: false,
            enum: discord_js_1.ChannelType
        }
    ],
    execute(ctx, [g, types]) {
        g ??= ctx.guild;
        return this.success(types.length === 0 ? g?.channels.cache.randomKey() :
            g?.channels.cache.filter(x => types.includes(x.type)).randomKey());
    },
});
//# sourceMappingURL=randomGuildChannelID.js.map