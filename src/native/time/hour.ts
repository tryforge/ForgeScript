import { NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$hour",
    category: "time",
    version: "1.2.0",
    description: "Returns current UTC hour",
    unwrap: true,
    execute: function() {
        return this.success(new Date().getHours())
    }
})