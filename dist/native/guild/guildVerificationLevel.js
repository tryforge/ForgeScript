"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildVerificationLevel",
    version: "1.3.0",
    description: "Returns the server verification level",
    brackets: false,
    aliases: [
        "$serverVerificationLevel"
    ],
    output: discord_js_1.GuildVerificationLevel,
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
        return this.success(discord_js_1.GuildVerificationLevel[(guild ?? ctx.guild)?.verificationLevel]);
    },
});
//# sourceMappingURL=guildVerificationLevel.js.map