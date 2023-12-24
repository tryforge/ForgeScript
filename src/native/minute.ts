import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$minute",
    category: "unknown",
    version: "1.2.0",
    description: "Returns current UTC minute",
    unwrap: true,
    execute: function() {
        return this.success(new Date().getMinutes())
    }
})