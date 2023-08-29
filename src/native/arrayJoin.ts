import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayJoin",
    description: "Joins all elements from an array with given separator",
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
            name: "separator",
            description: "The separator to use for every element",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name, sep ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        return Return.success(Array.isArray(arr) ? arr.join(sep || ", ") : undefined)
    },
})