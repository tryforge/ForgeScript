"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionDelete",
    version: "1.4.0",
    description: "Deletes this interaction's reply",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.deleteReply().catch(ctx.noop);
        return this.success();
    },
});
//# sourceMappingURL=interactionDelete.js.map