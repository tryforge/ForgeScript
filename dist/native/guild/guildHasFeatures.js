"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guidHasFeatures",
    version: "1.4.0",
    description: "Returns whether this guild has all the given features",
    unwrap: true,
    brackets: true,
    aliases: [
        "$hasGuildFeatures"
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
        return this.success(features.every(x => g.features.includes(x)));
    },
});
//# sourceMappingURL=guildHasFeatures.js.map