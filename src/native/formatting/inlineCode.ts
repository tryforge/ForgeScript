import { bold } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export const MarkdownEscapeRegex = /(`)/gim

export default new NativeFunction({
    name: "$inlineCode",
    aliases: [
        "$inline",
        "$markdown"
    ],
    version: "1.3.0",
    brackets: true,
    description: "Adds backticks to text",
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to mark down, this will attempt to escape all `",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        
        return this.success(`\`${str.replace(MarkdownEscapeRegex, "\\$1")}\``)
    },
})