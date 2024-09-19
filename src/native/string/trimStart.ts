import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$trimStart",
    version: "1.0.6",
    description: "Trims at the start of a string",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to trim at the start",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [m]) {
        return this.success(m.trimStart())
    },
})
