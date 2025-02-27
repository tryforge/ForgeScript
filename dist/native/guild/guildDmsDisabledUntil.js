"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildDmsDisabledUntil",
    version: "2.2.0",
    description: "Returns the direct messages disabled timestamp of a guild",
    aliases: [
        "$serverDmsDisabledUntil"
    ],
    brackets: false,
    unwrap: true,
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
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.incidentsData?.dmsDisabledUntil?.getTime() ?? 0);
    },
});
//# sourceMappingURL=guildDmsDisabledUntil.js.map