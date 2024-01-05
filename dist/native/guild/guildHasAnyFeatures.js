"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildHasAnyFeatures",
    version: "1.4.0",
    description: "Returns whether this guild has any of the given features",
    unwrap: true,
    brackets: true,
    aliases: [
        "$guildHasAnyFeature",
        "$hasAnyGuildFeatures",
        "$hasAnyGuildFeature",
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to check for features",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
        {
            name: "features",
            rest: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.GuildFeature,
            description: "The features to check for"
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [g, features]) {
        return this.success(features.some(x => g.features.includes(x)));
    },
});
//# sourceMappingURL=guildHasAnyFeatures.js.map