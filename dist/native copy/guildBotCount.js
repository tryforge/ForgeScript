"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBotCount",
    version: "1.0.0",
    description: "Returns the bot count of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve bot count from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild ??= ctx.guild;
        return this.success(guild?.members.cache.filter((x) => x.user.bot).size);
    },
});
//# sourceMappingURL=guildBotCount.js.map