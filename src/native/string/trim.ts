import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$trim",
    version: "1.0.6",
    aliases: ["$trimSpace"],
    description: "Trims a string",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to trim",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(m.trim())
    },
})