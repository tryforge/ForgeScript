import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$messageSlice",
    version: "1.3.0",
    description: "Slices this message's args",
    brackets: true,
    args: [
        {
            name: "start",
            description: "The start index",
            rest: false,
            required: false,
            type: ArgType.Number
        },
        {
            name: "end",
            description: "The end index",
            rest: false,
            required: false,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ start, end ]) {
        return this.success(ctx.args.slice(start ?? undefined, end ?? undefined).join(" "))
    },
})