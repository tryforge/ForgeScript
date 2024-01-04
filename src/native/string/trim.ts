import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$trim",
    version: "1.0.6",
    description: "Trims a string",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "message",
            description: "The string to trim",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [m]) {
        return this.success(m.trim())
    },
})
