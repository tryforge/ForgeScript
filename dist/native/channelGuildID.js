"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelGuildID",
    version: "1.0.0",
    description: "Returns the channel guild id",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel;
        return this.success("guildId" in chan ? chan.guildId : undefined);
    },
});
//# sourceMappingURL=channelGuildID.js.map