"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setChannelNSFW",
    version: "1.0.0",
    description: "Sets a channel nsfw state, returns bool",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            description: "The channel id to set its nsfw state",
            rest: false,
            check: (i) => "setNSFW" in i,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "state",
            description: "The state to set",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [channel, state]) {
        return this.success(!!(await channel.setNSFW(state || false).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setChannelNSFW.js.map