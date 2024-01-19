"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelJoinable",
    version: "1.4.0",
    description: "Returns whether the voice channel is joinable by the bot",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
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
        return this.success("joinable" in chan ? chan.joinable : false);
    },
});
//# sourceMappingURL=channelJoinable.js.map