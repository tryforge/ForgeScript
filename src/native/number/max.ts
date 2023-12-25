import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$max",
    category: "number",
    version: "1.0.7",
    description: "Returns the largest number of the ones given",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the largest",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(Math.max(...numbers))
    },
})
