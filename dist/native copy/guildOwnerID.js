"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildOwnerID",
    version: "1.0.0",
    description: "Returns the server owner id",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the owner from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.ownerId);
    },
});
//# sourceMappingURL=guildOwnerID.js.map