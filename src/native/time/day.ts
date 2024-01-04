import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$day",
    version: "1.2.0",
    description: "Returns current day",
    unwrap: true,
    output: ArgType.Number,
    execute: function() {
        return this.success(new Date().getDay())
    }
})