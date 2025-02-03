import { underline } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export const UnderlineEscapeRegex = /(_)/gim

export default new NativeFunction({
    name: "$underline",
    version: "1.3.0",
    brackets: true,
    description: "Adds an underline to text",
    aliases: ["$underscore"],
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to add underline to, this will attempt to escape all _",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(underline(str.replace(UnderlineEscapeRegex, "\\$1")))
    },
})