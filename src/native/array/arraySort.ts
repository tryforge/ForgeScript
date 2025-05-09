import { ArgType, NativeFunction, Return } from "../../structures"

export enum SortType {
    asc,
    desc
}

export default new NativeFunction({
    name: "$arraySort",
    version: "1.2.0",
    description: "Sorts given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String
        },
        {
            name: "sort type",
            description: "The sort type, omit to use default sort order",
            rest: false,
            type: ArgType.Enum,
            enum: SortType
        },
    ],
    output: ArgType.Json,
    execute(ctx, [variable, other, order]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null) {
            const sorted = arr.sort(order !== null ? (a, b) => (order ? Number(a) - Number(b) : Number(b) - Number(a)) : undefined)

            if (other)
                ctx.setEnvironmentKey(other, sorted)
            else
                return this.successJSON(sorted)
        }
        
        return this.success()
    },
})