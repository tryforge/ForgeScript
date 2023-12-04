import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$testFunction",
    version: "1.3.0",
    description: "test function",
    brackets: true,
    unwrap: true,
    ],
    execute(_, [str]) {
        return Return.success("hi")
    },
})
