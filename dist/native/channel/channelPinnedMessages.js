"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelPinnedMessages",
    version: "1.5.0",
    description: "Returns the pinned messages of a channel",
    brackets: false,
    aliases: [
        "$pinnedMessages"
    ],
    unwrap: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "channel ID",
            description: "The channel to pull pinned messages from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "messages" in i
        },
        {
            name: "separator",
            description: "The separator to use for every message id",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    async execute(ctx, [channel, sep]) {
        channel ??= ctx.channel;
        const messages = await channel?.messages.fetchPinned().catch(ctx.noop);
        return this.success(messages ? messages.map(msg => msg.id).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=channelPinnedMessages.js.map