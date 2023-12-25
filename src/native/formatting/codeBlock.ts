import { bold, codeBlock } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"
import { MarkdownEscapeRegex } from "./markdown"

export default new NativeFunction({
    name: "$codeBlock",
    category: "formatting",
    version: "1.3.0",
    brackets: true,
    description: "Creates a code block with given text",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to create block with, this will attempt to escape all `",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "lang",
            description: "The language to give to this code block",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str, lang ]) {
        str = str.replace(MarkdownEscapeRegex, "\\$1")
        return this.success(
            lang ? 
                codeBlock(lang, str) :
                codeBlock(str)
        )
    },
})