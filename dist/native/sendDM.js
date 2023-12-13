"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sendDM",
    version: "1.0.0",
    description: "Sends a dm to the user",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to dm",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
        {
            name: "content",
            description: "The content to send",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "return message ID",
            description: "Returns the message id of the newly created message",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [user, content, returnMessageID]) {
        ctx.container.content = content || undefined;
        const msg = await ctx.container.send(user);
        return this.success(returnMessageID ? msg?.id : undefined);
    },
});
//# sourceMappingURL=sendDM.js.map