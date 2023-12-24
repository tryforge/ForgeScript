import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferResize",
    category: "unknown",
    version: "1.1.0",
    description: "Resizes a buffer",
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
            name: "length",
            description: "The new length for this buffer",
            required: true,
            type: ArgType.Number,
            rest: false
        }
    ],
    execute(ctx, [ name, length ]) {
        const buffer = ctx.getEnvironmentInstance(Buffer, name)
        if (buffer !== null) {
            const ref = Buffer.alloc(length)
            buffer.copy(ref, 0, 0, ref.length)
            ctx.setEnvironmentKey(name, ref)
        }
        return this.success()
    },
})