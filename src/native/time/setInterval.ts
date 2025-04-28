import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setInterval",
    version: "1.0.2",
    description: "Executes code after given duration until canceled",
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
        {
            name: "name",
            description: "The name for this interval",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields![0] as IExtendedCompiledFunctionField

        const time: Return = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](time)) return time

        const name: Return = await this["resolveUnhandledArg"](ctx, 2)
        if (!this["isValidReturnType"](name)) return name

        const data = setInterval(async () => {
            await this["resolveCode"](ctx, code)
        }, time.value as number)

        if (name.value) ctx.client.intervals.set(name.value as string, data)

        return this.success()
    },
})