import { ArgType, NativeFunction, Return } from "../../structures"
export const SplitTextName = "splits" as const

export default new NativeFunction({
    name: "$textSplit",
    category: "array",
    version: "1.2.0",
    description: "Creates an array on given text with a separator",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to split",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text, sep ]) {
        ctx.setEnvironmentKey(SplitTextName, text.split(sep))
        return this.success()
    },
})