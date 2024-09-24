"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionRequirePremium",
    version: "1.5.0",
    description: "Requires premium to use this interaction",
    unwrap: false,
    deprecated: true,
    async execute(ctx) {
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.sendPremiumRequired();
        return this.success();
    },
});
//# sourceMappingURL=interactionRequirePremium.js.map