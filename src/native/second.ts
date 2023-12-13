import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$second",
    version: "1.2.0",
    description: "Returns current UTC second",
    unwrap: true,
    execute: function() {
        return this.success(new Date().getSeconds())
    }
})