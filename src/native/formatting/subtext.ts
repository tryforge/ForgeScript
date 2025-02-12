import { subtext } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$subtext",
    version: "2.2.0",
    description: "Makes given text a subtext",
    unwrap: true,
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to make subtext",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(subtext(str))
    },
})