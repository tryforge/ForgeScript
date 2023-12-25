import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$maxSafeInteger",
    category: "number",
    version: "1.0.6",
    description: "Returns the highest safe integer",
    unwrap: false,
    execute() {
        return this.success(Number.MAX_SAFE_INTEGER)
    },
})
