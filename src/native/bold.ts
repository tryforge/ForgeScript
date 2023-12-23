import { bold } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const BoldEscapeRegex = /(\*)/gim

export default new NativeFunction({
    name: "$bold",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text bold",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make bold, this will attempt to escape all *",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(bold(str.replace(BoldEscapeRegex, "\\$1")))
    },
})