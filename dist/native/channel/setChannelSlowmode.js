"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setChannelSlowmode",
    version: "1.0.0",
    description: "Sets a channel slowmode, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i) => "setRateLimitPerUser" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "seconds",
            description: "The number of seconds per message",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    async execute(ctx, [channel, seconds]) {
        return this.success(!!(await channel.setRateLimitPerUser(seconds || 0).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setChannelSlowmode.js.map