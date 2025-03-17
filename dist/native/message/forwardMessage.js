"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$forwardMessage",
    version: "2.2.0",
    description: "Forwards a message to another channel, returns bool",
    aliases: ["$forward"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to forward",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "channel ID",
            description: "The channel to forward message to",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased() && i.type !== discord_js_1.ChannelType.GroupDM,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, message, channel]) {
        return this.success(!!(await message.forward((channel ?? ctx.channel)).catch(ctx.noop)));
    },
});
//# sourceMappingURL=forwardMessage.js.map