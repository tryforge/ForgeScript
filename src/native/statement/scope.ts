import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$scope",
    version: "1.4.0",
    description: "Runs functions in a cloned context",
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: false,
    output: ArgType.Unknown,
    async execute(ctx) {
        return this["resolveCode"](ctx.clone(), this.data.fields![0] as IExtendedCompiledFunctionField)
    },
})