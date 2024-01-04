"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isRoleMentioned",
    version: "1.3.0",
    description: "Returns whether a role was mentioned in this message",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "channel ID",
            rest: false,
            description: "Channel to pull the message from",
            check: (i) => i.isTextBased(),
            required: true,
            type: structures_1.ArgType.Channel
        },
        {
            name: "message ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
            description: "The message to get mentions from"
        },
        {
            name: "role ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
            description: "The entity to check for mentions"
        }
    ],
    execute(ctx, [, message, r]) {
        return this.success(message.mentions.roles.has(r));
    },
});
//# sourceMappingURL=isRoleMentioned.js.map