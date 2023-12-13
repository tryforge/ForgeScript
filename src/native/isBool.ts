import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBool",
    version: "1.0.6",
    description: "Checks whether given value is bool like",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "value",
            description: "Value to check if its valid bool",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [v]) {
        return this.success(v === "true" || v === "false")
    },
})
