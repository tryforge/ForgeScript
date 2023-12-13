"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelPosition",
    version: "1.0.3",
    description: "Returns the channel position",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The id of the channel to get its position",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
    ],
    execute(ctx, [ch]) {
        const chan = ch ?? ctx.channel;
        return this.success(chan && "position" in chan ? chan.position : undefined);
    },
});
//# sourceMappingURL=channelPosition.js.map