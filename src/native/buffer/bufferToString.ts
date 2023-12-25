import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bufferToString",
    category: "buffer",
    version: "1.1.0",
    description: "Stringifies a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "encoding",
            description: "The encoding to stringify with",
            type: ArgType.String,
            rest: false
        }
    ],
    execute(ctx, [ name, encoding ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString(encoding as BufferEncoding || "utf-8"))
    },
})