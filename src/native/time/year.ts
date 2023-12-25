import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$year",
    category: "time",
    version: "1.2.0",
    description: "Returns current year",
    unwrap: true,
    execute: function() {
        return this.success(new Date().getFullYear())
    }
})