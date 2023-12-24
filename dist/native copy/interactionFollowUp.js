"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionFollowUp",
    version: "1.2.0",
    description: "Forces an interaction follow up",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this follow up",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
        {
            name: "return message ID",
            description: "Whether to fetch and return the message id of the follow up",
            rest: false,
            type: structures_1.ArgType.Boolean,
            required: false,
        },
    ],
    async execute(ctx, [content, returnMessageID]) {
        ctx.container.fetchReply = returnMessageID ?? false;
        ctx.container.followUp = true;
        ctx.container.content = content || undefined;
        if (!this.hasFields) {
            await ctx.container.send(ctx.obj);
            return this.success();
        }
        const reply = await ctx.container.send(ctx.obj);
        return this.success(returnMessageID ? reply?.id : undefined);
    },
});
//# sourceMappingURL=interactionFollowUp.js.map