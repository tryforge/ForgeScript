"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildDefaultMessageNotifications",
    version: "1.3.0",
    description: "Returns the default message notifications for this guild",
    brackets: false,
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
        guild.explicitContentFilter;
        return this.success(discord_js_1.GuildDefaultMessageNotifications[(guild ?? ctx.guild)?.defaultMessageNotifications]);
    },
});
//# sourceMappingURL=guildDefaultMessageNotifications.js.map