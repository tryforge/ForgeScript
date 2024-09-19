import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$trimLines",
    version: "1.5.0",
    description: "Trims empty lines from a string",
    brackets: true,
    unwrap: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to trim empty lines",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [text]) {
        return this.success(text.split(/\n/).map(x => x.trim()).filter(x => x !== "").join("\n"))
    },
})