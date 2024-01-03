"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildEmojis",
    version: "1.3.0",
    unwrap: true,
    aliases: [
        "$serverEmojis"
    ],
    brackets: false,
    description: "Returns every emoji of the guild",
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to get emoji from"
        },
        {
            name: "separator",
            description: "The separator to use for every emoji",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [guild, sep]) {
        guild ??= ctx.guild;
        return this.success(guild?.emojis.cache.map(x => x.toString()).join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildEmojis.js.map