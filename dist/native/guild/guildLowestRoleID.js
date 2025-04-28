"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildLowestRoleID",
    version: "1.5.0",
    description: "Returns the lowest role id of a guild",
    aliases: [
        "$serverLowestRoleID"
    ],
    brackets: false,
    output: structures_1.ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve its lowest role",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        guild ??= ctx.guild;
        const lowest = guild?.roles.cache.filter(role => role.id !== guild.id).sort((a, b) => a.position - b.position).first();
        return this.success(lowest?.id ?? guild?.id);
    },
});
//# sourceMappingURL=guildLowestRoleID.js.map