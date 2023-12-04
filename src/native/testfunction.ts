import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$testFunction",
    version: "1.3.0",
    description: "test function",
    brackets: false,
    unwrap: true,
    execute: function() {
        return Return.success("hi")
    }
})
