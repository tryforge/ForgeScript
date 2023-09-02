import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getTimestamp",
    version: "1.0.0",
    description: "Gets the current timestamp",
    unwrap: false,
    execute(ctx) {
        return Return.success(Date.now())
    },
})