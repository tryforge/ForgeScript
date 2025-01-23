"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchRoles",
    version: "2.2.0",
    description: "Caches all roles of a guild",
    aliases: ["$fetchRole"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache roles of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "role ID",
            description: "The role to fetch",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0
        },
    ],
    async execute(ctx, [guild, role]) {
        guild ??= ctx.guild;
        if (role)
            await guild?.roles.fetch(role.id);
        else
            await guild?.roles.fetch();
        return this.success();
    },
});
//# sourceMappingURL=fetchRoles.js.map