"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelVoiceMemberCount",
    version: "1.4.0",
    description: "Returns the member count that are connected to this voice channel",
    unwrap: true,
    aliases: [
        "$channelMemberCount"
    ],
    output: structures_1.ArgType.Number,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        }
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel;
        return this.success(chan.isVoiceBased() ? chan.members.size : null);
    },
});
//# sourceMappingURL=channelVoiceMemberCount.js.map