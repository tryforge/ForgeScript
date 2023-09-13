import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$default",
    version: "1.0.6",
    brackets: true,
    unwrap: true,
    description: "Returns right hand value if the left hand value is falsy",
    args: [
        {
            name: "left hand",
            description: "Left hand value",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "right hand",
            description: "Right hand value",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ lhs, rhs ]) {
        return Return.success(lhs || rhs)
    },
})