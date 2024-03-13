"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMFALevel",
    version: "1.3.0",
    description: "Returns the mfa level for this guild",
    brackets: false,
    aliases: [
        "$serverMFALevel"
    ],
    output: discord_js_1.GuildMFALevel,
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
        return this.success(discord_js_1.GuildMFALevel[(guild ?? ctx.guild)?.mfaLevel]);
    },
});
//# sourceMappingURL=guildMFALevel.js.map