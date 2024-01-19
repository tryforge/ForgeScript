"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildFeatures",
    version: "1.0.0",
    description: "Returns the guild features",
    brackets: false,
    aliases: [
        "$serverFeatures"
    ],
    output: (0, array_1.default)(discord_js_1.GuildFeature),
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.features.join(sep || ", "));
    },
});
//# sourceMappingURL=guildFeatures.js.map