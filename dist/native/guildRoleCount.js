"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildRoleCount",
    version: "1.0.0",
    description: "Returns the role count of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get roles from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    execute(ctx, [guild]) {
        guild ??= ctx.guild;
        return this.success(guild.roles.cache.size);
    },
});
//# sourceMappingURL=guildRoleCount.js.map