"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildRawData",
    version: "1.5.0",
    description: "Returns the raw data of a guild",
    aliases: [
        "$serverRawData"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get raw data from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [guild]) {
        return this.successJSON((guild ?? ctx.guild)?.toJSON());
    },
});
//# sourceMappingURL=guildRawData.js.map