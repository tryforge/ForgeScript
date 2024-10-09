"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageType",
    version: "1.0.0",
    description: "Returns the message type",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its type",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        }
    ],
    output: discord_js_1.MessageType,
    execute(ctx, [, message]) {
        return this.success(discord_js_1.MessageType[(message ?? ctx.message)?.type]);
    },
});
//# sourceMappingURL=messageType.js.map