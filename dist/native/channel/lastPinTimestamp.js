"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$lastPinTimestamp",
    version: "1.5.0",
    aliases: [
        "$channelLastPinTimestamp"
    ],
    unwrap: true,
    brackets: false,
    output: structures_1.ArgType.Number,
    description: "Returns the latest pin timestamp of a channel",
    args: [
        {
            name: "channel ID",
            description: "The channel to pull last pin from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "lastPinTimestamp" in i
        },
    ],
    async execute(ctx, [ch]) {
        ch ??= ctx.channel;
        return this.success(ch.lastPinTimestamp);
    },
});
//# sourceMappingURL=lastPinTimestamp.js.map