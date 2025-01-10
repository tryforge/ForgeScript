import { DiscordAPIError } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether the given user can be DMed",
    unwrap: true,
    brackets: false,
    output: ArgType.Boolean,
    args: [
        {
            name: "user",
            description: "The user to test DMs",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user!

        try {
            await user.send("")
            return this.success(true)
        } catch (error) {
            if (error instanceof DiscordAPIError) {
                if (error.code === 50007) return this.success(false) // DM disabled
                if (error.code === 50006) return this.success(true)  // Empty message (aka DM enabled)
            }
            throw error
        }
    },
})
