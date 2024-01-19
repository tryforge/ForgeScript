"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMaxStageVideoChannelUsers",
    version: "1.3.0",
    description: "Returns the maximum video channel users for stage channels of this guild",
    brackets: false,
    aliases: [
        "$serverMaxStageVideoChannelUsers"
    ],
    output: structures_1.ArgType.Number,
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
        return this.success((guild ?? ctx.guild)?.maxStageVideoChannelUsers);
    },
});
//# sourceMappingURL=guildMaxStageVideoChannelUsers.js.map