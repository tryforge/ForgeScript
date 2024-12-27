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
        structures_1.Logger.deprecated("$interactionRequirePremium is deprecated and will be removed with the release of discord.js v15.0.0, please use the new premium-style buttons, this is the new Discord behavior.");
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.sendPremiumRequired();
        return this.success();
    },
});
//# sourceMappingURL=interactionRequirePremium.js.map