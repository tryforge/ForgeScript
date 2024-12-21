import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$isBoolean",
    version: "1.0.6",
    description: "Checks whether given value is bool like",
    aliases: ["$isBool"],
    brackets: true,
    unwrap: true,
    output: ArgType.Boolean,
    args: [
        {
            name: "value",
            description: "Value to check if its a valid bool",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [v]) {
        return this.success(v === "true" || v === "false")
    },
})