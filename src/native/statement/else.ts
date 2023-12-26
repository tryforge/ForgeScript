import {
    ArgType,
    IExtendedCompiledFunctionConditionField,
    IExtendedCompiledFunctionField,
    NativeFunction,
    Return,
} from "../../structures"

export default new NativeFunction({
    name: "$else",
    category: "statement",
    version: "1.2.0",
    description: "Creates a else statement",
    unwrap: true,
    args: [
        {
            name: "else",
            description: "The code to run",
            required: true,
            type: ArgType.String,
            rest: false,
        }
    ],
    brackets: true,
    async execute(ctx, [ arg ]) {
        return this.success(arg)
    },
})