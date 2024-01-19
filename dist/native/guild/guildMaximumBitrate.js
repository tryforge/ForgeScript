"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMaximumBitrate",
    version: "1.3.0",
    aliases: [
        "$serverMaximumBitrate"
    ],
    output: structures_1.ArgType.Number,
    description: "Returns the maximum bitrate for voice channels of this guild",
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
        return this.success((guild ?? ctx.guild)?.maximumBitrate);
    },
});
//# sourceMappingURL=guildMaximumBitrate.js.map