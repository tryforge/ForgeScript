import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$min",
    category: "number",
    version: "1.0.7",
    description: "Returns the smallest number of the ones given",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the smallest",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(Math.min(...numbers))
    },
})
