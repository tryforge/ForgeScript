"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageRawData",
    version: "1.5.0",
    description: "Returns the raw data of a message",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get message from",
            type: structures_1.ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message to get raw data from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [, message]) {
        return this.successJSON((message ?? ctx.message)?.toJSON());
    },
});
//# sourceMappingURL=messageRawData.js.map