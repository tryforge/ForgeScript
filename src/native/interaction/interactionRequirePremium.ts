import { Logger, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$interactionRequirePremium",
    version: "1.5.0",
    description: "Requires premium to use this interaction",
    unwrap: false,
    deprecated: true,
    async execute(ctx) {
        Logger.deprecated(
            "$interactionRequirePremium is deprecated and will be removed with the release of discord.js v15.0.0, please use the new premium-style buttons, this is the new Discord behavior."
        )
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.sendPremiumRequired()
        return this.success()
    },
})