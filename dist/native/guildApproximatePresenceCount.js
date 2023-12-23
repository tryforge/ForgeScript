"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildApproximatePresenceCount",
    version: "1.3.0",
    description: "Returns the approximated presence count",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.approximatePresenceCount ?? 0);
    },
});
//# sourceMappingURL=guildApproximatePresenceCount.js.map