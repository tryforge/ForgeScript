import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$bufferReadUtf8",
    version: "1.1.0",
    description: "Reads utf8 string from a buffer",
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
            description: "The index to start reading at",
            required: true,
            type: ArgType.Number,
            rest: false
        },
        {
            name: "end index",
            description: "The index to end reading at",
            required: false,
            type: ArgType.Number,
            rest: false
        },
    ],
    output: ArgType.String,
    execute(ctx, [ name, begin, end ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString("utf-8", begin, end || undefined))
    },
})