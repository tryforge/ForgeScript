"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$attachments",
    version: "1.0.3",
    description: "Retrieve an attachment url from a message with given index",
    brackets: false,
    unwrap: true,
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
            description: "The message to get its attachments",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            description: "The index to get this attachment",
            type: structures_1.ArgType.Number,
        },
    ],
    execute(ctx, [, message, index]) {
        index ??= 1;
        return this.success((message ?? ctx.message)?.attachments.at(index)?.url);
    },
});
//# sourceMappingURL=attachments.js.map