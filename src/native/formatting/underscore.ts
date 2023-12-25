import { bold, underscore } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export const UnderscoreEscapeRegex = /(_)/gim

export default new NativeFunction({
    name: "$underscore",
    category: "formatting",
    version: "1.3.0",
    brackets: true,
    description: "Adds underscore to text",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to add underscore to, this will attempt to escape all _",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(underscore(str.replace(UnderscoreEscapeRegex, "\\$1")))
    },
})