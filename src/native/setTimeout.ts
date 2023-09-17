import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setTimeout",
    version: "1.0.2",
    description: "Executes code after given duration",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "time",
            description: "How long to wait for before running this code",
            rest: false,
            type: ArgType.Time,
        },
    ],
    async execute(ctx) {
        const [code] = this.data.fields! as IExtendedCompiledFunctionField[]

        const time: Return = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](time)) return time

        setTimeout(async () => {
            await this["resolveCode"](ctx, code)
        }, time.value as number)

        return Return.success()
    },
})
