"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasEmbeds",
    version: "1.2.0",
    brackets: false,
    description: "Checks whether given message has embeds",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get message from",
            type: structures_1.ArgType.Channel,
            rest: false,
            required: true,
            check: (i) => "messages" in i
        },
        {
            name: "message ID",
            pointer: 0,
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            description: "The message to check for embeds"
        }
    ],
    execute(ctx, [, msg]) {
        return this.success(!!(msg ?? ctx.message)?.embeds.length);
    },
});
//# sourceMappingURL=hasEmbeds.js.map