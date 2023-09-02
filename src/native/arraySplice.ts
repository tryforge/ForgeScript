import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySplice",
    version: "1.0.0",
    description: "Removes x elements starting from y index",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The start index",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "delete count",
            description: "The number of items to delete",
            required: true,
            rest: false,
            type: ArgType.Number
        },
        {
            name: "elements",
            description: "The elements to insert in the deleted indexes",
            required: true,
            rest: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name, index, count, elements ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        if (Array.isArray(arr)) {
            arr.splice(index, count, ...elements)
        }

        return Return.success()
    },
})