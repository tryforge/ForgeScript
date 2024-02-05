import { ArgType, Context, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$arrayShuffle",
    version: "1.4.0",
    description: "Shuffles given array",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: ArgType.String,
            rest: false,
            required: true,
        }
    ],
    execute(ctx, [variable]) {
        const arr = ctx.getEnvironmentInstance(Array, variable)
        if (arr !== null)
            ctx.setEnvironmentKey(variable, arr.sort(x => 0.5 - Math.random()))
        return this.success()
    },
})