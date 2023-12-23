import { bold, strikethrough } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const StrikeThroughEscapeRegex = /(~)/gim

export default new NativeFunction({
    name: "$strikethrough",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text strikethrough",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make strikethrough, this will attempt to escape all ~",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(strikethrough(str.replace(StrikeThroughEscapeRegex, "\\$1")))
    },
})