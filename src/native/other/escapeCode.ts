import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$escapeCode",
    version: "1.4.0",
    description: "Code inside this function will not be executed",
    unwrap: false,
    brackets: true,
    aliases: [
        "$esc"
    ],
    args: [
        {
            name: "code",
            type: ArgType.String,
            description: "The code to ignore",
            required: true,
            rest: false
        }
    ],
    output: ArgType.String,
    execute(ctx) {
        return this.success(this.displayField(0))
    },
})