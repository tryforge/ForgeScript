import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userAccentColor",
    version: "1.0.0",
    description: "Returns the user accent color",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the accent color",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    unwrap: true,
    execute(ctx, [ user ]) {
        return Return.success(
            (user ?? ctx.user)?.hexAccentColor
        )
    },
})