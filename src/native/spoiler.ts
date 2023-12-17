import { bold, spoiler } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const SpoilerEscapeRegex = /(\|)/gim

export default new NativeFunction({
    name: "$spoiler",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text a spoiler",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make spoiler, this will attempt to escape all |",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(spoiler(str.replace(SpoilerEscapeRegex, "\\$1")))
    },
})