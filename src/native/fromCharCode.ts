import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$fromCharCode",
    version: "1.0.6",
    description: "Returns the characters from given codes",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "codes",
            description: "The codes to get its char codes",
            type: ArgType.Number,
            rest: true,
            required: true
        }
    ],
    execute(ctx, [ codes ]) {
        return Return.success(String.fromCharCode(...codes))
    },
})