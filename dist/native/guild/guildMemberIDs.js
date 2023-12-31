"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMemberIDs",
    aliases: [
        "$memberIDs"
    ],
    description: "Returns all cached member ids of a guild",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to pull members from"
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [g, sep]) {
        g ??= ctx.guild;
        return this.success(g?.members.cache.map(x => x.id).join(sep ?? ", "));
    },
});
//# sourceMappingURL=guildMemberIDs.js.map