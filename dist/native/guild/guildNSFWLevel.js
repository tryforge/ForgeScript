"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildNSFWLevel",
    version: "1.3.0",
    description: "Returns the nsfw level for this guild",
    brackets: false,
    aliases: [
        "$serverNSFWLevel"
    ],
    output: discord_js_1.GuildNSFWLevel,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success(discord_js_1.GuildNSFWLevel[(guild ?? ctx.guild)?.nsfwLevel]);
    },
});
//# sourceMappingURL=guildNSFWLevel.js.map