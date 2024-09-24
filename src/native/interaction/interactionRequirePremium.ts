import { NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$interactionRequirePremium",
    version: "1.5.0",
    description: "Requires premium to use this interaction",
    unwrap: false,
    deprecated: true,
    async execute(ctx) {
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.sendPremiumRequired()
        return this.success()
    },
})