import { bold } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export const BoldEscapeRegex = /(\*)/gim

export default new NativeFunction({
    name: "$hyperlink",
    version: "1.3.0",
    brackets: true,
    description: "Creates a hyperlink text",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make hyperlink",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "url",
            description: "The url to use for hyperlink",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str, url ]) {
        return this.success(`[${str}](${url})`)
    },
})