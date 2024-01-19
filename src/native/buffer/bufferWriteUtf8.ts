import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bufferWriteUtf8",
    version: "1.1.0",
    description: "Writes utf8 string to a buffer",
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
            name: "index",
            description: "The index to start writing on",
            required: true,
            type: ArgType.Number,
            rest: false
        },
        {
            name: "text",
            description: "The text to write",
            type: ArgType.String,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ name, index, str ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.write(str, index))
    },
})