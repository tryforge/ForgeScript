"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionUpdate",
    version: "1.0.3",
    description: "Forces an interaction update",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this response",
            required: true,
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    async execute(ctx, [content]) {
        ctx.container.content = content || undefined;
        ctx.container.update = true;
        if (!this.hasFields) {
            await ctx.container.send(ctx.obj);
            return this.success();
        }
        await ctx.container.send(ctx.obj);
        return this.success();
    },
});
//# sourceMappingURL=interactionUpdate.js.map