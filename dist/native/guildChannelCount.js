"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildChannelCount",
    version: "1.0.0",
    description: "Returns the server channel count",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get channels from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "categories",
            description: "The categories to filter by",
            rest: true,
            required: true,
            enum: discord_js_1.ChannelType,
            type: structures_1.ArgType.Enum,
        },
    ],
    execute(ctx, [guild, categories]) {
        guild ??= ctx.guild;
        return this.success((this.hasFields ? guild.channels.cache.filter((x) => categories.includes(x.type)) : guild.channels.cache)
            .size);
    },
});
//# sourceMappingURL=guildChannelCount.js.map