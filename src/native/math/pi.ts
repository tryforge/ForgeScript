import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$pi",
    version: "2.2.0",
    description: "Returns the constant pi",
    unwrap: false,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(Math.PI)
    },
})