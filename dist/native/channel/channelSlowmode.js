"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelSlowmode",
    version: "1.5.0",
    description: "Returns the channel slowmode in seconds",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its slowmode",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased()
        },
    ],
    execute(ctx, [ch]) {
        const channel = (ch ?? ctx.channel);
        return this.successJSON(channel?.rateLimitPerUser);
    },
});
//# sourceMappingURL=channelSlowmode.js.map