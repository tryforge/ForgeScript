"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildHighestRoleID",
    version: "1.5.0",
    description: "Returns the highest role id of a guild",
    aliases: [
        "$serverHighestRoleID"
    ],
    brackets: false,
    output: structures_1.ArgType.Role,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve its highest role",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.roles.highest.id);
    },
});
//# sourceMappingURL=guildHighestRoleID.js.map