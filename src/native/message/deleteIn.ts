import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteIn",
    version: "1.5.0",
    description: "Deletes the response after the given time",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The duration to wait for until deletion",
            rest: false,
            required: true,
            type: ArgType.Time,
        },
    ],
    execute(ctx, [ms]) {
        ctx.container.deleteIn = ms
        return this.success()
    },
})