import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferLength",
    category: "unknown",
    version: "1.1.0",
    description: "Returns the length of a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [ name ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.length)
    },
})