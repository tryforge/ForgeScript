"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleIDs",
    version: "1.0.0",
    description: "Returns the role ids of a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the roles of",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each role",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, sep]) {
        return this.success((guild ?? ctx.guild)?.roles.cache
            .filter((x) => x.guild.id !== x.id)
            .map((x) => x.id)
            .join(sep || ", "));
    },
});
//# sourceMappingURL=roleIDs.js.map