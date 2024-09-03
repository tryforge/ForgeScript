import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

async function asyncSort<T>(array: T[], asyncComparator: (a: T, b: T) => Promise<number>): Promise<T[]> {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const result = await asyncComparator(array[i], array[j]);
            if (result > 0) {
                [array[i], array[j]] = [array[j], array[i]]
            }
        }
    }
    return array
}

// Example asynchronous comparison function
async function asyncCompare(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a - b) // Compare numbers
        }, Math.random() * 1000) // Simulate asynchronous delay
    })
}

export default new NativeFunction({
    name: "$arrayAdvancedSort",
    version: "1.4.0",
    description: "Advanced array sort",
    unwrap: false,
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
            name: "var1",
            description: "The $env variable 1 to hold x value",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "var2",
            description: "The $env variable 2 to hold y value",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "code",
            description: "Optional code to use for sorting, previous 2 vars must have been given",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Json,
    async execute(ctx) {
        const { return: rt, args } = await this["resolveMultipleArgs"](ctx, 0, 1, 2, 4)

        if (!this["isValidReturnType"](rt)) return rt

        const [ mainVar, var1, var2, otherVar ] = args
        const arr = ctx.getEnvironmentInstance(Array, mainVar)

        if (arr != null) {
            const result = await asyncSort(arr, async (x, y) => {
                ctx.setEnvironmentKey(var1, x)
                ctx.setEnvironmentKey(var2, y)
                const exec = await this["resolveUnhandledArg"](ctx, 3)
                return Number(exec.value)
            })

            if (result === null) return this.stop()

            if (otherVar !== null) {
                ctx.setEnvironmentKey(otherVar, result)
            } else {
                return this.successJSON(result)
            }
        }

        return this.success()
    },
})