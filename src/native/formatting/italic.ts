import { italic } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export const ItalicEscapeRegex = /([*_])/gim

export default new NativeFunction({
    name: "$italic",
    version: "1.5.0",
    brackets: true,
    description: "Makes given text italic",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make italic, this will attempt to escape all _ and *",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(italic(str.replace(ItalicEscapeRegex, "\\$1")))
    },
})