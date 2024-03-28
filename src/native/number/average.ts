import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$average",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Calculates the average of given numbers",
    args: [
        {
            name: "separator",
            description: "The delimiter of each value",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "values",
            description: "Values separated by `separator`",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep, values ]) {
        const n = values.split(sep).map(Number)
        return this.success(
            n.reduce((x, y) => x + y, 0) / n.length
        )
    },
})