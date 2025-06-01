import { Arg, ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$reverseText",
    version: "1.5.0",
    description: "Reverses given text",
    aliases: ["$reverse"],
    brackets: true,
    unwrap: true,
    args: [
        Arg.requiredString()
    ],
    output: ArgType.String,
    execute(ctx, [ txt ]) {
        return this.success(txt.split("").reverse().join(""))
    },
})