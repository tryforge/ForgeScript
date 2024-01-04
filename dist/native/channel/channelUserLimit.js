"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelUserLimit",
    version: "1.4.0",
    description: "Returns the user limit of the voice channel",
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Number,
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
        return this.success("userLimit" in chan ? chan.userLimit : 0);
    },
});
//# sourceMappingURL=channelUserLimit.js.map