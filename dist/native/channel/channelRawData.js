"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelRawData",
    version: "1.5.0",
    description: "Returns the raw data of a channel",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get raw data from",
            type: structures_1.ArgType.Channel,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [channel]) {
        return this.successJSON((channel ?? ctx.channel)?.toJSON());
    },
});
//# sourceMappingURL=channelRawData.js.map