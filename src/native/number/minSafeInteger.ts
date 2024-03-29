import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$minSafeInteger",
    version: "1.0.6",
    description: "Returns the lowest safe integer",
    unwrap: false,
    output: ArgType.Number,
    execute() {
        return this.success(Number.MIN_SAFE_INTEGER)
    },
})
