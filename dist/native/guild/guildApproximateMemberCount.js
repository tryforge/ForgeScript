"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildApproximateMemberCount",
    version: "1.3.0",
    description: "Returns the approximated member count",
    brackets: false,
    aliases: [
        "$serverApproximateMemberCount"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Number,
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.approximateMemberCount ?? 0);
    },
});
//# sourceMappingURL=guildApproximateMemberCount.js.map