import { DiscordAPIError } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether given user can be DMed",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user",
            description: "The user to test dms",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ user ]) {
        user ??= ctx.user!

        // Only way to know is to send an empty message
        const dm = await user?.send("").catch(err => err)
        
        return this.success(
            // If any of these is not met, cant be dmed
            // 50007 = Cannot send message to this user
            !!dm && dm instanceof DiscordAPIError && dm.status !== 50007
        )
    },
})