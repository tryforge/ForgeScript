import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    execute: function() {
        return Return.success(new Date().getDay())
    }
})