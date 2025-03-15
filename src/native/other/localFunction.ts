import { IExtendedCompiledFunctionField } from "../../structures"
import { ArgType, NativeFunction } from "../../structures/@internal/NativeFunction"

export default new NativeFunction({
    name: "$localFunction",
    version: "2.3.0",
    description: "Declares a new local function",
    aliases: ["$fn"],
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The local function name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The local function code",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "params",
            description: "The local function params",
            rest: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx) {
        const code = this.data.fields![1] as IExtendedCompiledFunctionField

        const name = await this["resolveUnhandledArg"](ctx, 0)
        if (!this["isValidReturnType"](name)) return name

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 2)
        if (!this["isValidReturnType"](rt)) return rt

        ctx.localFunctions.set(name.value as string, { 
            code,
            args: args[0]
        })

        return this.success()
    },
})